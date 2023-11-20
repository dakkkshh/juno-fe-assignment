import { useEffect, useState } from "react";
import CloseAccountButton from "../components/buttons/CloseAccount";
import PrimaryButton from "../components/buttons/Primary";
import SearchBar from "../components/input/Searchbar";
import Select from "../components/input/Select";
import Input from "../components/input/Input";
import TextArea from "../components/input/TextArea";
import RadioButton from "../components/input/RadioButton";
import PendingMonitoringTable from "../components/tables/PendingMonitoring";
import CompletedMonitoringTable from "../components/tables/CompletedMonitoring";
import Modal from "../components/modals";

export default function Monitoring() {
  const triggerReasonOptions = ["IP Change", "FIFO"];
  const riskLevelOptions = ["Low", "Medium", "High"];
  const riskLevelOrder = {
    Low: 0,
    Medium: 1,
    High: 2,
  };
  const initialAccountClosureDetails = {
    email: "",
    wantToFileUAR: null,
    reason: "",
    note: "",
    chargeClosureFee: false,
  };
  const initialAccountClosureErrors = {
    email: "",
    wantToFileUAR: "",
    reason: "",
    note: "",
  };
  const dataOptions = [
    {
      id: 1,
      name: "Pending",
      component: PendingMonitoringTable,
      data: {
        columns: [
          {
            key: "user",
            title: "User",
            sortAllowed: false,
          },
          {
            key: "riskLevel",
            title: "Risk Level",
            sortAllowed: true,
            ascendingSortFunction: (a, b) => {
              return riskLevelOrder[a] - riskLevelOrder[b];
            },
            descendingSortFunction: (a, b) => {
              return riskLevelOrder[b] - riskLevelOrder[a];
            },
            sortDirection: "none",
          },
          {
            key: "triggerReason",
            title: "Trigger Reason",
            sortAllowed: false,
          },
          {
            key: "inQueueFor",
            title: "In Queue For",
            sortAllowed: true,
            ascendingSortFunction: (a, b) => {
              return a - b;
            },
            descendingSortFunction: (a, b) => {
              return b - a;
            },
            sortDirection: "none",
          },
          {
            key: "dateAddedOn",
            title: "Date Added On",
            sortAllowed: true,
            ascendingSortFunction: (a, b) => {
              return new Date(a) - new Date(b);
            },
            descendingSortFunction: (a, b) => {
              return new Date(b) - new Date(a);
            },
            sortDirection: "none",
          },
          {
            key: "previouslyReviewed",
            title: "Previously reviewed",
            sortAllowed: false,
          },
        ],
        rows: [
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "Low",
            triggerReason: "IP Change",
            inQueueFor: 4,
            dateAddedOn: "2023-1-12",
            previouslyReviewed: {
              date: "2023-10-12",
              reviewd: true,
            },
          },
          {
            user: {
              name: "Trina Kundu",
              email: "trina@onjuno.com",
            },
            riskLevel: "Medium",
            triggerReason: "IP Change",
            inQueueFor: 4,
            dateAddedOn: "2023-10-12",
            previouslyReviewed: {
              date: "2023-12-10",
              reviewd: false,
            },
          },
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "Low",
            triggerReason: "FIFO",
            inQueueFor: 5,
            dateAddedOn: "2023-10-12",
            previouslyReviewed: {
              date: "2023-10-12",
              reviewd: true,
            },
          },
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "Medium",
            triggerReason: "FIFO",
            inQueueFor: 5,
            dateAddedOn: "2023-10-12",
            previouslyReviewed: {
              date: "2023-10-12",
              reviewd: true,
            },
          },
          {
            user: {
              name: "Sameer Choubey",
              email: "sameerchoubey123@gmail.com",
            },
            riskLevel: "High",
            triggerReason: "IP Change",
            inQueueFor: 5,
            dateAddedOn: "2023-10-12",
            previouslyReviewed: {
              date: "2023-10-12",
              reviewd: false,
            },
          },
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "Low",
            triggerReason: "FIFO",
            inQueueFor: 4,
            dateAddedOn: "2022-10-19",
            previouslyReviewed: {
              date: "2023-10-12",
              reviewd: true,
            },
          },
        ],
      },
    },
    {
      id: 2,
      name: "Completed",
      component: CompletedMonitoringTable,
      data: {
        columns: [
          {
            key: "user",
            title: "User",
            sortAllowed: false,
          },
          {
            key: "riskLevel",
            title: "Risk Level",
            sortAllowed: true,
            ascendingSortFunction: (a, b) => {
              return riskLevelOrder[a] - riskLevelOrder[b];
            },
            descendingSortFunction: (a, b) => {
              return riskLevelOrder[b] - riskLevelOrder[a];
            },
            sortDirection: "none",
          },
          {
            key: "actionReason",
            title: "Action Reason",
            sortAllowed: false,
          },
          {
            key: "timeToClose",
            title: "Time to Close",
            sortAllowed: true,
            ascendingSortFunction: (a, b) => {
              return a - b;
            },
            descendingSortFunction: (a, b) => {
              return b - a;
            },
            sortDirection: "none",
          },
          {
            key: "dateAddedOn",
            title: "Date Added On",
            sortAllowed: true,
            ascendingSortFunction: (a, b) => {
              return new Date(a) - new Date(b);
            },
            descendingSortFunction: (a, b) => {
              return new Date(b) - new Date(a);
            },
          },
          {
            key: "actionTakenBy",
            title: "Action Taken By",
            sortAllowed: false,
          },
        ],
        rows: [
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "Medium",
            actionReason: "Flagged",
            timeToClose: 14,
            dateAddedOn: "2023-10-9",
            actionTakenBy: {
              name: "Neil",
              email: "neil@onjuno.com",
            },
          },
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "High",
            actionReason: "Closed",
            timeToClose: 14,
            dateAddedOn: "2023-10-12",
            actionTakenBy: {
              name: "Neil",
              email: "neil@onjuno.com",
            },
          },
          {
            user: {
              name: "Sam Altman",
              email: "samaltman123@gmail.com",
            },
            riskLevel: "Low",
            actionReason: "Closed",
            timeToClose: 14,
            dateAddedOn: "2023-10-17",
            actionTakenBy: {
              name: "Neil",
              email: "neil@onjuno.com",
            },
          },
          {
            user: {
              name: "Pratik Shetty",
              email: "pratik3@gmail.com",
            },
            riskLevel: "High",
            actionReason: "Flagged",
            timeToClose: 15,
            dateAddedOn: "2023-6-12",
            actionTakenBy: {
              name: "Neil",
              email: "neil@onjuno.com",
            },
          },
          {
            user: {
              name: "Sameer Choubey",
              email: "sameerchoubey123@gmail.com",
            },
            riskLevel: "Low",
            actionReason: "Closed",
            timeToClose: 15,
            dateAddedOn: "2023-10-12",
            actionTakenBy: {
              name: "Neil",
              email: "neil@onjuno.com",
            },
          },
          {
            user: {
              name: "Elon Musk",
              email: "elon@twitterceo.com",
            },
            riskLevel: "Low",
            actionReason: "SOI requested",
            timeToClose: 15,
            dateAddedOn: "2023-3-12",
            actionTakenBy: {
              name: "Neil",
              email: "neil@onjuno.com",
            },
          },
        ],
      },
    },
  ];
  const [selectedDataOption, setSelectedDataOption] = useState(dataOptions[0]);
  const [closeAccountModalOpen, setCloseAccountModalOpen] = useState(false);
  const [selectedRiskLevel, setSelectedRiskLevel] = useState("");
  const [selectedTriggerReason, setSelectedTriggerReason] = useState("");
  const [closeAccountDetails, setCloseAccountDetails] = useState(
    initialAccountClosureDetails
  );
  const [closeAccountErrors, setCloseAccountErrors] = useState(
    initialAccountClosureErrors
  );

  function sortData(columnData) {
    let updatedColumnData = columnData;
    let sortedData = [];
    if (columnData.sortDirection === "none") {
      updatedColumnData.sortDirection = "ascending";

      sortedData = selectedDataOption.data.rows.sort((a, b) => {
        return columnData.ascendingSortFunction(
          a[columnData.key],
          b[columnData.key]
        );
      });
    } else if (columnData.sortDirection === "ascending") {
      updatedColumnData.sortDirection = "descending";

      sortedData = selectedDataOption.data.rows.sort((a, b) => {
        return columnData.descendingSortFunction(
          a[columnData.key],
          b[columnData.key]
        );
      });
    } else {
      updatedColumnData.sortDirection = "none";

      sortedData = dataOptions[selectedDataOption.id - 1].data.rows;
    }
    const updatedColumns = selectedDataOption.data.columns.map((column) => {
      if (column.key === columnData.key) {
        return updatedColumnData;
      }
      return {
        ...column,
        sortDirection: "none",
      };
    });
    setSelectedDataOption({
      ...selectedDataOption,
      data: {
        ...selectedDataOption.data,
        columns: updatedColumns,
        rows: sortedData,
      },
    });
  }

  function handleRiskLevelOptionChange(e) {
    const selectedRiskLevel = e.target.value;
    setSelectedRiskLevel(selectedRiskLevel);
  }

  function handleTriggerReasonOptionChange(e) {
    const selectedTriggerReason = e.target.value;
    setSelectedTriggerReason(selectedTriggerReason);
  }

  function handleSearchChange(e) {
    const searchVal = e.target.value;
    const selectedDataId = selectedDataOption.id;
    if (searchVal === "") {
      setSelectedDataOption({
        ...selectedDataOption,
        data: {
          ...selectedDataOption.data,
          rows: dataOptions[selectedDataId - 1].data.rows,
        },
      });
      return;
    }
    const updatedData = selectedDataOption.data.rows.filter(
      (row) =>
        row.user.name.toLowerCase().includes(searchVal.toLowerCase()) ||
        row.user.email.toLowerCase().includes(searchVal.toLowerCase())
    );
    setSelectedDataOption({
      ...selectedDataOption,
      data: {
        ...selectedDataOption.data,
        rows: updatedData,
      },
    });
  }

  function closeAccountModalCloseHandler(){
    setCloseAccountModalOpen(false);
    setCloseAccountDetails(initialAccountClosureDetails);
    setCloseAccountErrors(initialAccountClosureErrors);
  }

  function validateCloseAccountDetails() {
    let check = true;
    const errors = {
      email: "",
      wantToFileUAR: "",
      reason: "",
      note: "",
    };
    const emailRegex = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    if (!emailRegex.test(closeAccountDetails.email)) {
      check = false;
      errors.email = "Please enter a valid email";
    }
    if (closeAccountDetails.wantToFileUAR === null) {
      check = false;
      errors.wantToFileUAR = "Please select an option";
    }
    if (closeAccountDetails.reason === "") {
      check = false;
      errors.reason = "Please enter a valid reason";
    }
    if (closeAccountDetails.note?.length < 10) {
      check = false;
      errors.note = "Length of note should be greater than 10";
    }
    setCloseAccountErrors(errors);
    return check;
  }

  function handleCloseAccountSubmission() {
    try {
      const isValid = validateCloseAccountDetails();
      if (!isValid) return;
      alert("Account closed successfully");
      setCloseAccountModalOpen(false);
      setCloseAccountDetails(initialAccountClosureDetails);
      setCloseAccountErrors(initialAccountClosureErrors);
    } catch (err) {
      console.log(err);
    }
  }

  function CloseAccountModalContent() {
    return (
      <>
        <Input
          type="email"
          value={closeAccountDetails.email}
          label="Email"
          className="mb-4"
          onChange={(e) => {
            setCloseAccountDetails({
              ...closeAccountDetails,
              email: e.target.value,
            });
          }}
          error={closeAccountErrors.email}
        />
        <div className="mb-4">
          <div className="flex items-center gap-x-6">
            <h5>Want to file UAR</h5>
            <RadioButton
              label="Yes"
              checked={closeAccountDetails.wantToFileUAR === true}
              onChange={() => {
                setCloseAccountDetails({
                  ...closeAccountDetails,
                  wantToFileUAR: true,
                });
              }}
            />
            <RadioButton
              label="No"
              checked={closeAccountDetails.wantToFileUAR === false}
              onChange={() => {
                setCloseAccountDetails({
                  ...closeAccountDetails,
                  wantToFileUAR: false,
                });
              }}
            />
          </div>
          {closeAccountErrors.wantToFileUAR && (
            <p className="text-error text-sm">
              {closeAccountErrors.wantToFileUAR}
            </p>
          )}
        </div>
        <Select
          value={closeAccountDetails.reason}
          label="Reason"
          className="mb-4"
          selectClassName="bg-white w-full"
          placeholder="Select Reason"
          options={triggerReasonOptions}
          onChange={(e) => {
            setCloseAccountDetails({
              ...closeAccountDetails,
              reason: e.target.value,
            });
          }}
          error={closeAccountErrors.reason}
        />
        <TextArea
          label="Note"
          className="mb-4"
          value={closeAccountDetails.note}
          onChange={(e) => {
            setCloseAccountDetails({
              ...closeAccountDetails,
              note: e.target.value,
            });
          }}
          minLines={2}
          error={closeAccountErrors.note}
        />
        <div className="flex items-center justify-end">
          <RadioButton
            label="Charge closure fee"
            checked={closeAccountDetails.chargeClosureFee === true}
            onChange={() => {
              setCloseAccountDetails({
                ...closeAccountDetails,
                chargeClosureFee: true,
              });
            }}
          />
          <PrimaryButton
            title="Close Account"
            className="ml-auto"
            disabled={
              closeAccountDetails.email === "" ||
              closeAccountDetails.wantToFileUAR === null ||
              closeAccountDetails.reason === "" ||
              closeAccountDetails.note === ""
            }
            onClick={handleCloseAccountSubmission}
          />
        </div>
      </>
    );
  }

  useEffect(() => {
    function handleRiskAndTriggerFilter(){
      const selectedDataId = selectedDataOption.id;
      let updatedData = [];
      if (selectedRiskLevel === "" && selectedTriggerReason === "") {
        updatedData = dataOptions[selectedDataId - 1].data.rows;
      } else if (selectedRiskLevel === "") {
        updatedData = dataOptions[selectedDataId - 1].data.rows.filter(
          (row) => row.triggerReason === selectedTriggerReason
        );
      } else if (selectedTriggerReason === "") {
        updatedData = dataOptions[selectedDataId - 1].data.rows.filter(
          (row) => row.riskLevel === selectedRiskLevel
        );
      } else {
        updatedData = dataOptions[selectedDataId - 1].data.rows.filter(
          (row) =>
            row.riskLevel === selectedRiskLevel &&
            row.triggerReason === selectedTriggerReason
        );
      }
      setSelectedDataOption({
        ...selectedDataOption,
        data: {
          ...selectedDataOption.data,
          rows: updatedData,
        },
      });
    }
    handleRiskAndTriggerFilter();
  }, [selectedRiskLevel, selectedTriggerReason]);

  return (
    <div>
      <h1>Monitoring</h1>
      <div className="mt-4 flex items-center overflow-x-auto hide-scrollbar">
        {dataOptions.map((dataOption, index) => (
          <button
            key={`dataOption-${index}`}
            className={`py-2 px-4 transition-all ${
              selectedDataOption.id === dataOption.id
                ? "border-solid border-primary border-b-2"
                : ""
            }`}
            onClick={() => {
              setSelectedDataOption(dataOption);
              setSelectedRiskLevel("");
              setSelectedTriggerReason("");
            }}
          >
            <h4
              className={`${
                selectedDataOption.id === dataOption.id
                  ? "text-primary"
                  : "text-secondary"
              }`}
            >
              {dataOption.name}
            </h4>
          </button>
        ))}
        <CloseAccountButton
          className="ml-auto min-w-150"
          onClick={() => setCloseAccountModalOpen(true)}
        />
      </div>
      <div className="mt-8 flex items-center gap-x-4 overflow-x-auto hide-scrollbar">
        <SearchBar
          className="w-1/2 max-w-sm min-w-150"
          onChange={handleSearchChange}
        />
        <Select
          value={selectedTriggerReason}
          placeholder="Trigger Reason"
          options={triggerReasonOptions}
          onChange={handleTriggerReasonOptionChange}
        />
        <Select
          value={selectedRiskLevel}
          placeholder="Risk Level"
          options={riskLevelOptions}
          onChange={handleRiskLevelOptionChange}
        />
      </div>
      <div className="mt-8 overflow-x-auto w-full hide-scrollbar">
        <selectedDataOption.component
          data={selectedDataOption.data}
          sortData={sortData}
        />
      </div>

      <Modal
        title="Close Account"
        isOpen={closeAccountModalOpen}
        onClose={closeAccountModalCloseHandler}
        children={CloseAccountModalContent()}
      />
    </div>
  );
}
