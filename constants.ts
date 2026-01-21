
import { FAQItem, DownloadItem, ClaimRequirement, ServiceForm } from './types';

export const COMPANY_INFO = {
  name: "Wealth Build Consulting",
  address: "1-2-8 MEDAN ANGSANA 3, BANDAR BARU AYER ITAM, 11500 AYER ITAM, PULAU PINANG",
  email: "wbca2023@gmail.com",
  phone: "04-2411882",
  operatingHours: "Monday - Friday: 8:30 AM - 5:30 PM"
};

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How do I register for the eConnect portal?",
    answer: "Visit the eConnect website, click 'Register Now', verify your identity using your NRIC or Policy Number, and complete the OTP verification sent to your mobile."
  },
  {
    question: "What documents are needed for an inpatient claim?",
    answer: "You typically need the Attending Physician's Statement, original bills/invoices, original payment receipts, and the diagnosis details."
  },
  {
    question: "Can I change my payment method online?",
    answer: "Yes, you can change your payment method via the eConnect portal under the 'My Service Request' tab."
  },
  {
    question: "Where can I find my e-Medical card?",
    answer: "Login to eConnect, navigate to 'My Portfolio', and select 'eMedical Card' to view or download it."
  },
  {
    question: "What is the processing time for a claim?",
    answer: "Processing times vary depending on the type of claim and completeness of documents. Generally, simple claims are processed within 7-14 working days."
  }
];

export const DOWNLOAD_CENTRE: DownloadItem[] = [
  { name: "Request for Contractual Changes", category: "Service", description: "Use for payment mode changes, sum assured reduction, or rider cancellation." },
  { name: "Request for Person Changes", category: "Service", description: "Use for updating address, email, contact number, or signature." },
  { name: "Claim Form - Medical/H&S", category: "Claims", description: "Standard form for hospitalization and surgery claims." },
  { name: "Living Assurance Benefit Form", category: "Claims", description: "Form required for critical illness or living assurance claims." },
  { name: "Appointment of Nominees", category: "Service", description: "Form to appoint, change or revoke nominees/trustees." },
  { name: "EasiPay Service Registration", category: "Payment", description: "Registration form for auto-debit via credit/debit card." }
];

export const CLAIM_REQUIREMENTS: ClaimRequirement[] = [
  {
    type: "Inpatient / Day Surgery",
    items: [
      "H&S Attending Physician's Statement",
      "Original bill/invoices",
      "Original Payment Receipt (including deposit and refund receipt)",
      "Cause of Claim (Accident/ Illness)",
      "Admission & Discharge Date",
      "Location of Clinic & Name of Doctor",
      "Diagnosis & Symptoms onset date"
    ]
  },
  {
    type: "Death Benefit",
    items: [
      "Deceased's NRIC (Front & Back)",
      "Death Certificate",
      "Claimant's NRIC & Birth Certificate",
      "Claimant's Bank Account Details",
      "Letter of Authorisation (for Death)",
      "List of surviving family members"
    ]
  },
  {
    type: "Motor Insurance (Tokio Marine/Generali)",
    items: [
      "Claim Form",
      "Policy Report",
      "Photocopy of Insured's & Driver's NRIC and Driving Licence",
      "Vehicle's Ownership Certificate",
      "Accident Scene Photographs",
      "Certificate of Insurance"
    ]
  },
  {
    type: "Travel Delay",
    items: [
      "Incident Date & Location",
      "Total Amount Claimed & Reason",
      "Proof of entire trip (Boarding Pass/Tickets)",
      "Written confirmation from Airline on duration and reason",
      "E-payment Form & Bank Statement Header"
    ]
  }
];

export const SERVICE_FORMS: ServiceForm[] = [
  { requestType: "Change of Payment Mode/Method", formName: "Request for Contractual Changes", notes: "Available via eConnect portal" },
  { requestType: "Update Address/Email/Contact", formName: "Request for Person Changes", notes: "Can also be done via eConnect Profile" },
  { requestType: "Inclusion of Benefits", formName: "Request for Contractual Changes with Health Declaration", notes: "Requires medical underwriting" },
  { requestType: "Request for Auto-debit (Credit Card)", formName: "EasiPay Service", notes: "Master/Visa local banks only" },
  { requestType: "Request for Reinstatement", formName: "Health Warranty", notes: "For lapsed policies" }
];
