import pytesseract
import cv2
import re
import os
import json

# Function to preprocess the image (Basic Grayscale and Thresholding)
def preprocess_image(image_path):
    img = cv2.imread(image_path)

    if img is None:
        print(f"Error: Unable to read image from path: {image_path}")
        return None

    # Convert image to grayscale
    gray_img = cv2.cvtColor(img, cv2.COLOR_BGR2GRAY)

    # Apply simple thresholding to create a binary image
    _, threshold_img = cv2.threshold(gray_img, 150, 255, cv2.THRESH_BINARY)

    return threshold_img

# Function to extract text using Tesseract OCR
def extract_text(image_path):
    # Preprocess the image
    processed_img = preprocess_image(image_path)

    # Use Tesseract OCR to extract text from the preprocessed image
    extracted_text = pytesseract.image_to_string(processed_img)
    return extracted_text

# Function to check if the document is a death certificate
def is_death_certificate(extracted_text):
    death_keywords = ["Death Certificate", "Certificate of Death", "Death Record"]
    for keyword in death_keywords:
        if keyword.lower() in extracted_text.lower():
            return True
    return False

# Function to extract the name of the person
def extract_name(extracted_text):
    name_match = re.search(r"(?<=Name[:\s]*)([A-Za-z\s]+)", extracted_text)
    if name_match:
        return name_match.group(1).strip()
    return "Name not found"

# Function to extract the registration number
def extract_registration_number(extracted_text):
    reg_match = re.search(r"(Registration\s*No\.|Reg\s*No\.|Certificate\s*No\.)[\s:]*([A-Za-z0-9]+)", extracted_text)
    if reg_match:
        return reg_match.group(2).strip()
    return "Registration number not found"

# Function to save the extracted data into a JSON file
def save_data(is_death_certificate, name, registration_number, extracted_text, image_name):
    data = {
        "is_death_certificate": is_death_certificate,
        "name": name,
        "registration_number": registration_number
    }

    # Save data to the required JSON file
    with open(f'output/Required_data_{image_name}.json', 'w') as json_file:
        json.dump(data, json_file, indent=4)
    print(f"Data saved to 'output/Required_data_{image_name}.json'.")

    # Also save the raw extracted text in a text file
    with open(f'output/extracted_data_{image_name}.txt', 'w') as text_file:
        text_file.write(extracted_text)
    print(f"Extracted text saved to 'output/extracted_data_{image_name}.txt'.")

# Main function to process the image and get details
def process_death_certificate(image_path, image_name):
    # Extract text from the image
    extracted_text = extract_text(image_path)

    # Check if it is a death certificate
    is_death = is_death_certificate(extracted_text)

    # Extract the name
    name = extract_name(extracted_text)

    # Extract the registration number
    registration_number = extract_registration_number(extracted_text)

    # Save the extracted data to JSON and text files
    save_data(is_death, name, registration_number, extracted_text, image_name)

# Run the script
if __name__ == "__main__":
    # Loop through all images in the train/valid/ folder
    for image_name in os.listdir('certificates/train/valid'):
        image_path = os.path.join('train/valid', image_name)
        if image_path.lower().endswith(('.png', '.jpg', '.jpeg')):
            process_death_certificate(image_path, image_name)
