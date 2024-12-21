import React, { useState } from "react";
import ssoLogo from "../assets/ssoLogo.png";
import Logo from "../assets/logo.png";
import gitHubLogo from "../assets/gitHubLogo.png";
import gitLabLogo from "../assets/gitLabLogo.png";
import bitbucketLogo from "../assets/bitbucketLogo.png";
import azureLogo from "../assets/azureLogo.png";
import { useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState("saas");
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/home"); // Navigates to the "/home" route
  };

  return (
    <div className="min-h-screen grid lg:grid-cols-2 px-3 md:px-0">
      {/* Left side - Stats */}
      <div className="hidden relative p-4 bg-white md:flex flex-col items-center justify-center border-b border-r">
        {/* Decorative ant logo */}
        <div className="absolute bottom-0 left-0 w-64 h-64 opacity-10">
          <img
            src={Logo}
            alt="Decorative ant logo"
            width={240}
            height={240}
            className="object-contain"
          />
        </div>
        <div className="bg-white rounded-xl shadow-xl p-6 mb-4 w-fit">
          <div className="flex items-center gap-2 mb-4 border-b py-1">
            <img
              src={Logo}
              alt="CodeAnt AI"
              width={30}
              height={30}
              className="object-contain"
            />
            <span className="text-sm font-medium">
              AI to Detect & Autofix Bad Code
            </span>
          </div>
          <div className="grid grid-cols-3 gap-8 text-center mb-6">
            <div>
              <div className="font-bold">30+</div>
              <div className="text-sm text-gray-600">Language Support</div>
            </div>
            <div>
              <div className="font-bold">10K+</div>
              <div className="text-sm text-gray-600">Developers</div>
            </div>
            <div>
              <div className="font-bold">100K+</div>
              <div className="text-sm text-gray-600">Hours Saved</div>
            </div>
          </div>
        </div>

        <div className="bg-white relative left-1/4 -top-10 rounded-xl shadow-lg px-12 py-6 w-fit">
          <div className="flex items-center gap-2 mb-2">
            <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full border-4 border-blue-500" />
            </div>
            <div className="flex items-center gap-1 text-green-600 text-sm">
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M7 17L17 7M17 7H8M17 7V16" />
              </svg>
              <span>14%</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">Issues Fixed</div>
          <div className="text-2xl font-bold">500K+</div>
        </div>
      </div>

      {/* Right side - Login */}
      <div className="flex flex-col items-center justify-center max-w-md mx-auto w-full ">
        <div className="w-full space-y-6 rounded-xl shadow-lg p-3 bg-white">
          <div className="flex flex-col items-center gap-6">
            <img
              src={Logo}
              alt="CodeAnt AI"
              width={48}
              height={48}
              className="object-contain"
            />
            <h1 className="text-2xl font-semibold">Welcome to CodeAnt AI</h1>
          </div>

          <div className="p-1 bg-gray-100 rounded-lg flex">
            <button
              onClick={() => setActiveTab("saas")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors
                  ${
                    activeTab === "saas"
                      ? "bg-[#1570EF] shadow-sm text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
            >
              SAAS
            </button>
            <button
              onClick={() => setActiveTab("self-hosted")}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors
                  ${
                    activeTab === "self-hosted"
                      ? "bg-[#1570EF] shadow-sm text-white"
                      : "text-gray-600 hover:text-black"
                  }`}
            >
              Self Hosted
            </button>
          </div>

          {activeTab == "saas" ? (
            <div className="space-y-3">
              <button
                onClick={handleNavigate}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={gitHubLogo}
                  alt="gitHub"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Sign in with GitHub
              </button>
              <button
                onClick={handleNavigate}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={bitbucketLogo}
                  alt="BitBucket Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Sign in with Bitbucket
              </button>
              <button
                onClick={handleNavigate}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={azureLogo}
                  alt="Azure Deveops Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Sign in with Azure DevOps
              </button>
              <button
                onClick={handleNavigate}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={gitLabLogo}
                  alt="gitLab Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Sign in with GitLab
              </button>
            </div>
          ) : (
            <div className="space-y-3">
              <button
                onClick={handleNavigate}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={gitLabLogo}
                  alt="gitLab Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Self Hosted GitLab
              </button>
              <button
                onClick={handleNavigate}
                className="w-full flex items-center gap-2 px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                <img
                  src={ssoLogo}
                  alt="sso Logo"
                  width={20}
                  height={20}
                  className="object-contain"
                />
                Sign in with SSO
              </button>
            </div>
          )}

          <p className="text-center text-sm text-gray-600">
            By signing up you agree to the{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
