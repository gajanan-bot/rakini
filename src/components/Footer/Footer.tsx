import { Separator } from '@radix-ui/react-separator'
import React from 'react'

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16">
    <div className="max-w-7xl mx-auto px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-16 h-16  flex items-center justify-center">
              <img src="./public/img/logo 1.png" alt="logo" />
            </div>
            <div className="font-semibold text-xl">Rakini Softech</div>
          </div>
          <p className="text-gray-300 text-base mb-6">
            Expertly trained, battle-tested, elite software developers on
            demand
          </p>
          <div className="space-y-2 mb-6">
            <div className="text-gray-300">📞 +94 713249222</div>
            <div className="text-gray-300">✉️ hello@courtney.lk</div>
            <div className="text-gray-300">
              📍 Courtney Lanka (Private) Limited
              <br />
              Level 35, World Trade Center
              <br />
              Colombo 01
            </div>
          </div>
          <div>
            <h4 className="font-medium text-lg mb-4">Follow us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white">
                LinkedIn
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Facebook
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Instagram
              </a>
              <a href="#" className="text-gray-300 hover:text-white">
                Twitter
              </a>
            </div>
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Company</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Terms & Conditions
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">Services</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Hire Permanent Staff
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Staff Augmentation
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Software Outsourcing
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Build Remote Office
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-6">How to Start</h3>
          <ul className="space-y-3">
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                You Asked
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                We Proceed
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                Negotiate
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white">
                You Get
              </a>
            </li>
          </ul>
        </div>
      </div>

      <Separator className="border-gray-700 mb-8" />

      <div className="pb-8">
        <p className="text-gray-400 text-sm">
          © 2024 Rakini Softech. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  )
}

export default Footer