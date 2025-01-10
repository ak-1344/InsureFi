from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing import image
import numpy as np

# Load the trained model
model = load_model('death_certificate_verification_model.h5')

def predict_certificate(image_path):
    # Load and preprocess the image
    img = image.load_img(image_path, target_size=(224, 224))
    img_array = image.img_to_array(img)
    img_array = np.expand_dims(img_array, axis=0)  # Add batch dimension
    img_array /= 255.0  # Rescale pixel values to [0, 1]

    # Make a prediction
    prediction = model.predict(img_array)
    
    if prediction[0] > 0.5:
        return "Fraudulent"
    else:
        return "Valid"

# Test on a new certificate
result = predict_certificate('certificates/test/certificate5.png')  # Path to a test certificate
print(f"The certificate is: {result}")
