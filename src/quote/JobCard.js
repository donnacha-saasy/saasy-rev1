import React, { Component, useState, useEffect } from "react";

function JobCard({ customerName, eircode, installDate, jobStatus, mobile, referenceID }) {
    return (
        <tr className="text-xs bg-gray-50">
            <td className="py-5 px-6 font-medium">{referenceID}</td>
            <td className="font-medium">{customerName}</td>
            <td className="font-medium">{mobile}</td>
            <td className="font-medium">{installDate}</td>
            <td className="font-medium">{eircode}</td>
            <td>
                <span className="inline-block py-1 px-2 text-white bg-green-500 rounded-full">{jobStatus}</span>
            </td>
        </tr>
    )
}
export default JobCard;