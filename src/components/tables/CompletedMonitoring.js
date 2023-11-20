import {
  FaExternalLinkAlt,
  FaSort,
  FaSortUp,
  FaSortDown,
} from "react-icons/fa";
import moment from "moment/moment";

export default function CompletedMonitoringTable({
  data = { columns: [], rows: [] },
  sortData = () => {},
}) {
  return (
    <table className="w-full rounded-t-lg overflow-hidden">
      <thead>
        <tr className="bg-BGLight">
          {data?.columns?.map((column) => (
            <th
              key={`column-${column.key}`}
              className={`py-3 px-6 min-w-150 ${
                column.sortAllowed ? "cursor-pointer" : ""
              }`}
              onClick={() => {
                if (column.sortAllowed) sortData(column);
              }}
            >
              <div className="flex gap-x-2">
                <h6 className="text-left">{column.title}</h6>
                {column.sortAllowed && column.sortDirection === "none" && (
                  <FaSort className="text-secondary" />
                )}
                {column.sortAllowed && column.sortDirection === "ascending" && (
                  <FaSortUp className="text-secondary" />
                )}
                {column.sortAllowed &&
                  column.sortDirection === "descending" && (
                    <FaSortDown className="text-secondary" />
                  )}
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data?.rows?.map((row, index) => (
          <tr
            className="border-solid border-BGBorder"
            style={{
              borderWidth: "1px",
            }}
            key={`row-${index}`}
          >
            <td className="py-3 px-6 flex items-center gap-x-2">
              <div>
                <h6>{row.user.name}</h6>
                <h6 className="text-secondary mt-1">{row.user.email}</h6>
              </div>
              <a
                href={`mailto:${row.user.email}`}
                target="_blank"
                rel="noreferrer"
                className="ml-auto"
              >
                <FaExternalLinkAlt className="ml-auto text-primary" />
              </a>
            </td>
            <td className="py-3 px-6">
              <div className="flex gap-x-2 items-center">
                <div
                  className={`w-3 h-3 rounded-full bgrisk${row.riskLevel}`}
                />
                <h6 className={`risk${row.riskLevel}`}>{row.riskLevel}</h6>
              </div>
            </td>
            <td className="py-3 px-6">
              <h6>{row.actionReason}</h6>
            </td>
            <td className="py-3 px-6">
              <h6>{row.timeToClose} days</h6>
            </td>
            <td className="py-3 px-6">
              <h6 className="text-secondary">
                {moment(row.dateAddedOn).format("DD MMM, YYYY")}
              </h6>
            </td>
            <td className="py-3 px-6">
              <h6>{row.actionTakenBy.name}</h6>
              <h6 className="text-secondary mt-1">{row.actionTakenBy.email}</h6>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
