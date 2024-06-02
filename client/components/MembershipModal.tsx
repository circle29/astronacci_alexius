import { useAuth } from "@clerk/nextjs";
import React, { useEffect, useState } from "react";
import ErrorNotification from "./ErrorNotification";
import SuccessNotification from "./SuccessNotification";

interface membershipType {
  isOpen: boolean;
  onClose: () => void;
}

const MembershipModal = ({ isOpen, onClose }: membershipType) => {
  const [membership, setMembership] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showAlertSuccess, setShowAlertSuccess] = useState(false);
  const [showAlertError, setShowAlertError] = useState(false);
  const { userId } = useAuth();

  const selectMembership = async () => {
    try {
      const res = await fetch("http://localhost:8000/user/membership/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId: userId, membershipId: membership }),
      });

      if (res.ok) {
        const responseData = await res.json();
        setSuccessMessage(responseData.message);
        setShowAlertSuccess(true);
      } else {
        const responseData = await res.json();
        setErrorMessage(responseData.message);
        setShowAlertError(true);
      }
    } catch (error) {
      console.log("error");
    }
  };

  const closeNotification = () => {
    setShowAlertSuccess(false);
    setShowAlertError(false);
    onClose();
  };

  const handleClick = async () => {
    await selectMembership();
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="modal-overlay fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      {}
      <div className="bg-white p-4 rounded shadow-lg z-50 w-96">
        <h2 className="bold-20 underline my-2">Membership Details</h2>
        <p className="regular-16 my-1">Select your membership</p>
        <div>
          <form className="max-w-sm mx-auto">
            <select
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => setMembership(e.target.value)}
            >
              <option>Choose a membership</option>
              <option value="2">Silver</option>
              <option value="3">Gold</option>
              <option value="4">Platinum</option>
            </select>
          </form>
        </div>
        <div className="flex justify-between">
          <button
            onClick={onClose}
            className="mt-2 p-2 bg-black text-white hover:bg-gray-300 hover:text-black rounded"
          >
            Close
          </button>
          <button
            onClick={handleClick}
            className="mt-2 p-2 bg-black text-white hover:bg-gray-300 hover:text-black rounded"
          >
            Apply
          </button>
        </div>
        {showAlertError && (
          <ErrorNotification
            errorMessage={errorMessage}
            onClose={closeNotification}
          />
        )}
        {showAlertSuccess && (
          <SuccessNotification
            successMessage={successMessage}
            onClose={closeNotification}
          />
        )}
      </div>
    </div>
  );
};

export default MembershipModal;
