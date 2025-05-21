import React, { useState } from "react";
import FormField from "@/src/components/Form/form-field";
// import FileUpload from "./FileUpload";

interface FormValues {
  name: string;
  surname: string;
  dateOfBirth: string;
  address: string;
  postalCodeCity: string;
  idCardDetails: string;
  mobileNumber: string;
  simCardNumber: string;
  location: string;
  date: string;
}

interface FormErrors {
  [key: string]: string;
}

const DeclarationForm: React.FC = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    name: "",
    surname: "",
    dateOfBirth: "",
    address: "",
    postalCodeCity: "",
    idCardDetails: "",
    mobileNumber: "",
    simCardNumber: "",
    location: "",
    date: "",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [idFile, setIdFile] = useState<File | null>(null);
  const [idFileError, setIdFileError] = useState<string>("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (formErrors[name]) {
      setFormErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleFileChange = (file: File | null) => {
    setIdFile(file);
    setIdFileError("");

    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setIdFileError("File size exceeds 5MB limit");
        setIdFile(null);
        return;
      }

      const validTypes = [
        "image/jpeg",
        "image/jpg",
        "image/png",
        "application/pdf",
      ];
      if (!validTypes.includes(file.type)) {
        setIdFileError(
          "Invalid file format. Please upload JPG, JPEG, PNG or PDF"
        );
        setIdFile(null);
      }
    }
  };

  const validateForm = (): boolean => {
    const errors: FormErrors = {};
    let isValid = true;

    if (!formValues.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formValues.surname.trim()) {
      errors.surname = "Surname is required";
      isValid = false;
    }

    if (!formValues.dateOfBirth) {
      errors.dateOfBirth = "Date of birth is required";
      isValid = false;
    }

    if (!formValues.address.trim()) {
      errors.address = "Address is required";
      isValid = false;
    }

    if (!formValues.mobileNumber.trim()) {
      errors.mobileNumber = "Mobile number is required";
      isValid = false;
    } else if (
      !/^\d{10,15}$/.test(formValues.mobileNumber.replace(/\D/g, ""))
    ) {
      errors.mobileNumber = "Please enter a valid mobile number";
      isValid = false;
    }

    if (!formValues.simCardNumber.trim()) {
      errors.simCardNumber = "SIM card number is required";
      isValid = false;
    }

    if (!idFile) {
      setIdFileError("ID card upload is required");
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    if (validateForm()) {
      setTimeout(() => {
        console.log("Form submitted:", { ...formValues, idFile });
        setSubmitted(true);
        setSubmitting(false);
      }, 1500);
    } else {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <div className="text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            Form Submitted Successfully
          </h2>
          <p className="text-gray-600 mb-6">
            Thank you for submitting your declaration form.
          </p>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormValues({
                name: "",
                surname: "",
                dateOfBirth: "",
                address: "",
                postalCodeCity: "",
                idCardDetails: "",
                mobileNumber: "",
                simCardNumber: "",
                location: "",
                date: "",
              });
              setIdFile(null);
            }}
            className="px-6 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition-colors duration-200"
          >
            Submit Another Form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-8 bg-white rounded-lg shadow-md my-8">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-bold text-gray-800">Declaration Form</h1>
        <p className="text-gray-600">
          (Prize Acceptance and delivery confirmation)
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <div className="border-b-2 border-yellow-400 pb-1 mb-2">
            <label className="text-sm font-medium text-gray-700">To:</label>
          </div>
          <div className="pt-4">
            <p className="font-normal text-gray-800">
              <b>1. MTN NIGERIA COMMUNICATIONS LIMITED,</b> With Principal
              Office At Golden Plaza, Falomo Roundabout, Ikoyi Lagos, Nigeria.
            </p>
          </div>
        </div>

        <div className="space-y-4">
          <div className="grid grid-cols-1 gap-4">
            <FormField
              label="Name"
              name="name"
              value={formValues.name}
              onChange={handleInputChange}
              placeholder="Enter your name"
              required
              error={formErrors.name}
            />

            <FormField
              label="Surname"
              name="surname"
              value={formValues.surname}
              onChange={handleInputChange}
              placeholder="Enter your surname"
              required
              error={formErrors.surname}
            />

            <FormField
              label="Date Of Birth"
              name="dateOfBirth"
              type="date"
              value={formValues.dateOfBirth}
              onChange={handleInputChange}
              required
              error={formErrors.dateOfBirth}
            />

            <FormField
              label="Address"
              name="address"
              value={formValues.address}
              onChange={handleInputChange}
              placeholder="Enter your full address"
              required
              error={formErrors.address}
            />

            <FormField
              label="Postal Code, City"
              name="postalCodeCity"
              value={formValues.postalCodeCity}
              onChange={handleInputChange}
              placeholder="Enter postal code and city"
              error={formErrors.postalCodeCity}
            />

            <FormField
              label="Details Of Personal ID Card"
              name="idCardDetails"
              value={formValues.idCardDetails}
              onChange={handleInputChange}
              placeholder="Enter ID card details"
              error={formErrors.idCardDetails}
            />

            <FormField
              label="Mobile Phone Number (MSISDN)"
              name="mobileNumber"
              value={formValues.mobileNumber}
              onChange={handleInputChange}
              placeholder="Enter mobile number"
              required
              error={formErrors.mobileNumber}
            />

            <FormField
              label="SIM Card Number (IMSI)"
              name="simCardNumber"
              value={formValues.simCardNumber}
              onChange={handleInputChange}
              placeholder="Enter SIM card number"
              required
              error={formErrors.simCardNumber}
            />
          </div>
        </div>

        <div className="my-8 p-4 bg-gray-50 rounded-md">
          <p className="font-medium mb-3">
            I certify that the above information is complete and accurate and I
            declare that:
          </p>

          <ol className="list-decimal pl-5 space-y-2 text-sm">
            <li>
              I am the legal owner of the above telephone number and SIM Card.
            </li>
            <li>
              I have an active MoMo account attached to the above telephone
              number.
            </li>
            <li>
              I have participated in the Offer under the name "MyNumba Don Win"
              (henceforth "Offer") that was organised by MTN, and according to
              the terms & conditions of the Offer I was nominated the Winner.
            </li>
            <li>
              I am familiar with all the contents of the terms and conditions of
              the Offer, which were made available on www.mynumbadonwin.ng
              (henceforth the "Terms and Conditions") and I fully and
              unconditionally accept the Terms and Conditions, without any
              reservations.
            </li>
            <li>
              I am not in breach of any and all provisions of the Terms and
              Conditions.
            </li>
            <li>
              I consent to the use of my name and surname and/or the location of
              my place of residence, as well as to the use of my photograph
              and/or voice (containing in photographic records, audio, video and
              other types of records) for reasons of publicity connected to the
              Offer, without from it arising any payment or compensation
              obligations on the part of MTN, or any third party for that
              matter.
            </li>
            <li>
              I accept and received the prize of
              ................................ NGN (henceforth "Prize") that I
              have won by participating in the Offer.
            </li>
            <li>
              All information and data provided here is true and correct, and I
              am not an employee of MTN or any subcontractor and/or promotional
              or advertising agency involved with this Offer, nor am I a member
              of any family or agent of any of the above. I fully understand
              that any misrepresentation of fact as to my eligibility, whether
              intentional or unintentional, will be sufficient cause to forfeit
              any Prize provided by MTN.
            </li>
          </ol>

          <p className="mt-4 text-sm font-medium">
            This form is legally binding statement; therefore I acknowledge that
            if I do not respect the above declarations I commit myself to return
            the Prize, whilst becoming liable for any losses or damages arising
            from such breach, within the limits set by all applicable Laws.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <FormField
            label="Location"
            name="location"
            value={formValues.location}
            onChange={handleInputChange}
            placeholder="Current location"
          />

          <FormField
            label="Date"
            name="date"
            type="date"
            value={formValues.date}
            onChange={handleInputChange}
          />

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-medium mb-1">
              Winner's Signature
            </label>
            <div className="w-full h-12 border border-gray-300 rounded-md bg-gray-50"></div>
            <p className="text-xs text-gray-500 mt-1">
              Signature will be collected separately
            </p>
          </div>
        </div>

        <div className="mb-6">
          <p className="text-sm font-medium mb-3">
            A Copy Of Winners ID Card Is To Be Attached To The Acceptance Form.
          </p>
          <p className="text-sm mb-3">
            Upload ID (NIN, International Passport, Voters Card)
          </p>

          {/* <FileUpload onFileChange={handleFileChange} error={idFileError} /> */}
        </div>

        <button
          type="submit"
          disabled={submitting}
          className={`w-full py-3 px-4 bg-yellow-500 text-white font-medium rounded-md 
            hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50
            transition-colors duration-200 ${
              submitting ? "opacity-70 cursor-not-allowed" : ""
            }`}
        >
          {submitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Processing...
            </span>
          ) : (
            "Submit"
          )}
        </button>
      </form>
    </div>
  );
};

export default DeclarationForm;
