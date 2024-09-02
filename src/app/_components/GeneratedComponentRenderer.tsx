"use client";
import React from "react";
import JsxParser from "react-jsx-parser";
import { FaRegQuestionCircle } from "react-icons/fa";

type Props = {
  code: string | null;
  error: string | null;
};

const GeneratedComponentRenderer: React.FC<Props> = ({ code, error }) => {
  const cleanComponentCode = (code: string | null) => {
    if (code) {
      const match = code.match(/return\s*\(\s*([\s\S]*?)\s*\);?/);
      if (match) {
        return match[1]?.trim() || "";
      }
      return "";
    }
    return "";
  };

  return (
    <div className="mt-8 w-full max-w-lg">
      {code ? (
        <>
          <div className="mb-4">
            <h3 className="mb-2 text-xl font-semibold text-[#00B8D9]">
              Component Preview
            </h3>
            <div
              className="rounded-lg bg-white p-4 shadow-lg"
              style={{ minHeight: "300px" }}
            >
              <JsxParser
                jsx={cleanComponentCode(code) || ""}
                components={{}}
                renderError={(error) => (
                  <div className="text-red-500">
                    <FaRegQuestionCircle className="mr-2 inline-block" />
                    Error rendering component: {error.message}
                  </div>
                )}
              />
              <div>{code}</div>
            </div>
          </div>
        </>
      ) : (
        error && (
          <div className="mt-6 text-red-500">
            <FaRegQuestionCircle className="mr-2 inline-block" />
            {error}
          </div>
        )
      )}
    </div>
  );
};

export default GeneratedComponentRenderer;
