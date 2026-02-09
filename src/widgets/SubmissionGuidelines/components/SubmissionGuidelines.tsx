import Titlebar from "@components/Titlebar";
import { authorGuidelines } from "@utils/constants";
import Link from "next/link";
import React from "react";
import {
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineCheckBadge,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import { FaFilePdf, FaFileWord, FaFileUpload } from "react-icons/fa";

export default function SubmissionGuidelinesContent() {
  return (
    <div className="px-[5vw] pt-[80px] lg:pt-[110px] pb-20 bg-gray-50/50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col items-center justify-center text-center space-y-4 mb-14">
        <Titlebar
          className="text-primary-600 text-sm lg:text-3xl font-bold uppercase tracking-wider"
          title="Submission Guidelines"
          bgColor="bg-transparent"
        />
        <p className="max-w-3xl text-gray-500 text-lg">
          Please follow the guidelines below to ensure your paper submission is
          successful and meets the conference standards.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-10 w-full items-start">
        {/* Main Content Column */}
        <div className="flex-1 space-y-10">
          {/* 1. Paper Submission */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 dark-hover hover:border-primary-100 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                <HiOutlineDocumentText className="text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Paper Submission
              </h2>
            </div>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Authors are invited to submit papers in electronic format.
                Acceptance or rejection is based on peer review of the full
                papers. The number of authors is limited to{" "}
                <span className="font-semibold text-gray-800">6</span>.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl border border-gray-200">
                <p className="text-sm font-medium text-gray-700 mb-2">
                  Format Specifications:
                </p>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600 ml-2">
                  <li>
                    Size limit: <span className="font-semibold">6 pages</span>
                  </li>
                  <li>
                    Format: <span className="font-semibold">IEEE Standard</span>
                  </li>
                </ul>
                <div className="mt-4">
                  <Link
                    href="https://www.ieee.org/conferences/publishing/templates.html"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary-600 hover:text-primary-700 bg-white border border-primary-200 px-4 py-2 rounded-lg hover:bg-primary-50 transition-colors"
                  >
                    <FaFileWord /> Download IEEE Template
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Peer Review */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 dark-hover hover:border-primary-100 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600">
                <HiOutlineUserGroup className="text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Peer Review Process
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed mb-4">
              Accepted papers will undergo a{" "}
              <span className="font-semibold">double-blind review process</span>{" "}
              by the Program Committee. Evaluation criteria include technical
              soundness, thematic alignment, novelty, and clarity.
            </p>
            <div className="flex items-start gap-3 p-3 bg-red-50 text-red-700 text-sm rounded-lg">
              <HiOutlineShieldCheck className="text-lg shrink-0 mt-0.5" />
              <p>
                Submissions must strictly adhere to formatting guidelines and
                ensure author anonymity. Non-compliant papers will be rejected
                without review.
              </p>
            </div>
          </div>

          {/* 3. Plagiarism Policy */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 dark-hover hover:border-primary-100 transition-all">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                <HiOutlineShieldCheck className="text-xl" />
              </div>
              <h2 className="text-xl font-bold text-gray-800">
                Plagiarism Policy
              </h2>
            </div>
            <p className="text-gray-600 leading-relaxed">
              Plagiarism involves presenting someone else's work as one's own
              without proper credit. We strictly use anti-plagiarism software.
              Violations will lead to immediate rejection or other penalties.{" "}
              <span className="font-semibold">Originality is paramount.</span>
            </p>
          </div>
        </div>

        {/* Sidebar Column */}
        <div className="w-full lg:w-[22rem] space-y-8">
          {/* Author Guidelines List */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
              Author Guidelines
            </h3>
            <ul className="space-y-4">
              {authorGuidelines?.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-sm text-gray-600"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-primary-600 mt-1.5 shrink-0"></span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Notification & Status */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">
              Paper Status
            </h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 rounded-lg bg-green-50 text-green-700 text-sm font-medium">
                <HiOutlineCheckBadge className="text-lg" /> Accepted
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-yellow-50 text-yellow-700 text-sm font-medium">
                <span className="w-4 h-4 rounded-full border-2 border-yellow-600 flex items-center justify-center text-[10px]">
                  !
                </span>
                Minor/Major Revisions
              </div>
              <div className="flex items-center gap-3 p-2 rounded-lg bg-red-50 text-red-700 text-sm font-medium">
                <span className="w-4 h-4 rounded-full border-2 border-red-600 flex items-center justify-center text-[10px]">
                  x
                </span>
                Rejected
              </div>
            </div>
          </div>

          {/* Documents Checklist */}
          <div className="bg-primary-600 p-6 rounded-2xl shadow-lg run-text-white text-white">
            <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
              <FaFileUpload /> Required Documents
            </h3>
            <ul className="space-y-3 text-sm text-blue-50">
              <li className="flex items-start gap-2">
                <span className="mt-1">1.</span>
                Final Camera Ready Paper (Word/LaTeX)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">2.</span>
                <span>
                  Signed Copyright Agreement.
                  <Link
                    href="https://drive.google.com/file/d/1ykBPIzpEuzXNIbwa9UjK5_F4oJ1DeiYn/view?usp=drive_link"
                    target="_blank"
                    className="underline hover:text-white ml-1 font-semibold"
                  >
                    Download here
                  </Link>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1">3.</span>
                Payment Proof
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
