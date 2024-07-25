import React from "react";
import "./Scrollbar.css";

function Table() {
  return (
    <div className="overflow-auto h-[200px] scrollbar">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="sticky top-0 normal-case bg-[#F6F7F8] font-bold text-blue-gray-900">
          <tr>
            <th scope="col" className="px-6 py-3">
              Problem/Diagnosis{" "}
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="overflow-auto">
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              Hypertension
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Chronic high blood pressure
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Under observation
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              Type 2 Diabetes
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Insullin resistance and blood sugar
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Cured
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              Asthma
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Recurrent episodes of bronchial constriction{" "}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Under observation
            </td>
          </tr>

          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              Hypertension
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Chronic high blood pressure
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Under observation
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              Type 2 Diabetes
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Insullin resistance and blood sugar
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Cured
            </td>
          </tr>
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <td
              scope="row"
              className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white"
            >
              Asthma
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Recurrent episodes of bronchial constriction{" "}
            </td>
            <td className="px-6 py-4 font-medium text-gray-900 whitespace-wrap dark:text-white">
              Under observation
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Table;
