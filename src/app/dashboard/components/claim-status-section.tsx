"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { CheckCircle, XCircle } from 'lucide-react'
import { cn } from "@/lib/utils"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

interface ClaimStatusSectionProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ClaimStatusSection({ className, ...props }: ClaimStatusSectionProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [uploadedFile, setUploadedFile] = useState<File | null>(null)
  const [nocFile, setNocFile] = useState<File | null>(null)
  const [verificationStatus, setVerificationStatus] = useState<'idle' | 'verifying' | 'valid' | 'invalid'>('idle')
  const [claimInProgress, setClaimInProgress] = useState(false)
  const [causeOfDeath, setCauseOfDeath] = useState('')

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setUploadedFile(file)
      setVerificationStatus('idle')
    } else {
      alert('Only PDF files are supported')
    }
  }

  const handleNocFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === 'application/pdf') {
      setNocFile(file)
    } else {
      alert('Only PDF files are supported')
    }
  }

  const verifyDocument = () => {
    setVerificationStatus('verifying')
    // Simulate ML model verification
    setTimeout(() => {
      const isValid = Math.random() > 0.5
      setVerificationStatus(isValid ? 'valid' : 'invalid')
      if (isValid) {
        setClaimInProgress(true)
        setIsDialogOpen(false)
      }
    }, 2000)
  }

  return (
    <Card className={cn("col-span-full md:col-span-1", className)} {...props}>
      <CardHeader>
        <CardTitle>Claim Status</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid gap-4">
          <div>
            <p className="text-sm font-medium mb-2">Current Status</p>
            <Badge className="bg-gradient-to-r from-[#01bdc1] to-[#1d73bd]">{claimInProgress ? "Claim in Progress" : "In Review"}</Badge>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Claim Amount</p>
            <p className="text-2xl font-bold">₹100,000</p>
          </div>
          <div>
            <p className="text-sm font-medium mb-2">Estimated Settlement</p>
            <p className="text-md">Within 14 days</p>
          </div>
          {!claimInProgress && (
            <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-[#01bdc1] to-[#1d73bd] w-full">
                  Apply for Claim
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Apply for Claim</DialogTitle>
                  <DialogDescription>
                    Upload the required documents to initiate your claim process.
                  </DialogDescription>
                </DialogHeader>
                <div className="grid bg-[#fff] gap-4 p-4">
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="death-certificate">Death Certificate</Label>
                    <Input id="death-certificate" type="file" accept="application/pdf" onChange={handleFileUpload} />
                  </div>
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="cause-of-death">Cause of Death</Label>
                    <Select value={causeOfDeath} onValueChange={setCauseOfDeath}>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Select Cause of Death" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Causes</SelectLabel>
                          <SelectItem value="natural">Natural</SelectItem>
                          <SelectItem value="accident">Accident</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  {causeOfDeath === 'accident' && (
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="fir-copy">Copy of FIR</Label>
                      <Input id="fir-copy" type="file" accept="application/pdf" onChange={handleFileUpload} />
                    </div>
                  )}
                  {causeOfDeath === 'natural' && (
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="postmortem-report">Postmortem Report</Label>
                      <Input id="postmortem-report" type="file" accept="application/pdf" onChange={handleFileUpload} />
                    </div>
                  )}
                  {causeOfDeath === 'other' && (
                    <div className="grid w-full max-w-sm items-center gap-1.5">
                      <Label htmlFor="other-cause">Specify Cause of Death</Label>
                      <Textarea id="other-cause" placeholder="Specify the cause of death" />
                    </div>
                  )}
                  <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="noc-document">NOC Document</Label>
                    <Input id="noc-document" type="file" accept="application/pdf" onChange={handleNocFileUpload} />
                  </div>
                  {uploadedFile && (
                    <div className="text-sm">
                      Uploaded: {uploadedFile.name}
                    </div>
                  )}
                  {uploadedFile && verificationStatus === 'idle' && (
                    <Button onClick={verifyDocument}>Verify Document</Button>
                  )}
                  {verificationStatus === 'verifying' && (
                    <div className="text-sm">Verifying document...</div>
                  )}
                  {verificationStatus === 'valid' && (
                    <div className="flex items-center text-sm text-green-500">
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Document verified successfully
                    </div>
                  )}
                  {verificationStatus === 'invalid' && (
                    <div className="flex items-center text-sm text-red-500">
                      <XCircle className="mr-2 h-4 w-4" />
                      Document verification failed. Please try again.
                    </div>
                  )}
                </div>
                <Button onClick={() => setIsDialogOpen(false)} className="w-full">
                  Close
                </Button>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardContent>
    </Card>
  )
}