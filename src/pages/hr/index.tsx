import React from "react";
import DashboardLayout from '../../layouts/DashboardLayout'
import SearchIcon from '../../assets/icons/search.svg'
import HelpIcon from '../../assets/icons/help.svg'
import BellIcon from '../../assets/icons/bell.svg'
import UserIcon from '../../assets/icons/user.svg'
import UserIconTwo from '../../assets/icons/user2.svg'
import UserIconThree from '../../assets/icons/user3.svg'
import SpotifyIcon from '../../assets/icons/spotify.svg'
import InvisionIcon from '../../assets/icons/invision.svg'
import SlackIcon from '../../assets/icons/slack.svg'

const HRAdmin: React.FC = () => {
  return (
    <DashboardLayout>
      <main className="flex w-full">
        <div className="w-[70%] bg-gray-50 p-6">
          <div className="flex justify-between">
            <div className="flex flex-col gap-1">
              <h3 className="font-semibold text-xl">Dashboard</h3>
              <p className="text-sm">Hello, Thomas. Welcome to Duplo</p>
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search by anything"
                className="py-2 px-3 w-72 rounded-lg focus:outline-none"
              />
              <div className="absolute right-0 top-0 cursor-pointer">
                <div className="bg-[#377DFF] flex justify-center w-12 h-[40px] rounded-tr-lg rounded-br-lg text-sm">
                  <img src={SearchIcon} className="w-4 text-white" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-[30%] bg-white">
          <div className="flex justify-end gap-6 py-5 px-6">
            <img src={HelpIcon} alt="" className="cursor-pointer" />
            <img src={BellIcon} alt="" className="cursor-pointer" />
            <img src={UserIcon} alt="" className="rounded-full w-6 cursor-pointer" />
          </div>
          <div className="my-16 flex justify-center items-center flex-col gap-3">
            <img src={UserIcon} alt="" className="rounded-full w-32" />
            <div className="text-center">
              <h4 className="text-2xl font-semibold">Thomas Flecture</h4>
              <p className="text-sm font-medium text-gray-400">Director of Recruiting</p>
            </div>
          </div>
          <div className="px-10">
            <div>
              <h4 className="font-semibold text-lg pb-4">Messages</h4>
              <div className="bg-gray-50 rounded-md p-5 flex items-center gap-4 mb-4">
                <div>
                  <img src={UserIconTwo} alt="" className="rounded-full w-10" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Cameron Williamson</h4>
                  <p className="text-xs text-gray-400">Have you planned any deadline....</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-md p-5 flex items-center gap-4">
                <div>
                  <img src={UserIconThree} alt="" className="rounded-full w-10" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Jacob Jones</h4>
                  <p className="text-xs text-gray-400">Have you planned any deadline....</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-lg pb-4">Recent Added Jobs</h4>
              <div className="bg-gray-50 rounded-md p-5 flex items-center gap-4 mb-4">
                <div>
                  <img src={SpotifyIcon} alt="" className="rounded-full w-10" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Product Designer</h4>
                  <p className="text-xs text-gray-400">Spotify, singapore - 6 hours ago</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-md p-5 flex items-center gap-4 mb-4">
                <div>
                  <img src={InvisionIcon} alt="" className="rounded-full w-10" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">iOS Developer</h4>
                  <p className="text-xs text-gray-400">San Fransisco, CA - 2 days ago</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-md p-5 flex items-center gap-4">
                <div>
                  <img src={SlackIcon} alt="" className="rounded-full w-10" />
                </div>
                <div className="flex flex-col">
                  <h4 className="text-sm font-medium">Brand Strategist</h4>
                  <p className="text-xs text-gray-400">New york, US - 2 days ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </main>
    </DashboardLayout>
  )
}

export default HRAdmin