/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-template-curly-in-string */
import React from 'react'

const Sidebar: React.FC = () => {

  const navItems = [
    {
      name: 'menu',
      sub_items: [
        {
          link_icon: 'dashboard',
          name: 'Dashboard'
        },
        {
          link_icon: 'message',
          name: 'Message'
        },
        {
          link_icon: 'calendar',
          name: 'Calendar'
        }
      ],
    },
    {
      name: 'recruitment',
      sub_items: [
        {
          link_icon: 'jobs',
          name: 'Jobs'
        },
        {
          link_icon: 'candidate',
          name: 'Candidate'
        },
        {
          link_icon: 'referrals',
          name: 'My Referrals'
        },
        {
          link_icon: 'career',
          name: 'Career Site'
        }
      ]
    },
    {
      name: 'Organization',
      sub_items: [
        {
          link_icon: 'employee',
          name: 'Employee'
        },
        {
          link_icon: 'structure',
          name: 'Structure'
        },
        {
          link_icon: 'report',
          name: 'Report'
        },
        {
          link_icon: 'settings',
          name: 'Settings'
        }
      ]
    }
  ]

  return (
    <aside className='h-screen w-60 bg-white py-8 px-5 border-r border-green-900'>
      <header className='flex justify-center items-center gap-1.5'>
        <div className='bg-[#377DFF] h-8 w-8 rounded-full'></div>
        <h3 className='font-medium text-xl'>Human R.</h3>
      </header>
      <div className='pt-10'>
        {
          navItems.map((navItem, i) => (
            <div key={i}>
              <p className='text-sm font-medium my-6'>{navItem.name.toUpperCase()}</p>
              <div className='mt-6'>
                {
                  navItem.sub_items.map((subItem, idx) => (
                    <div key={idx}>
                      <ul className='flex items-center gap-1.5'>
                        <img src={`./assets/icons/${subItem.link_icon}.svg`} alt="" />
                        <li className='pb-4'>
                          <a href="#" className='text-gray-400 font-medium'>{subItem.name}</a>
                        </li>
                      </ul>
                    </div>
                  ))
                }
              </div>
            </div>
          ))
        }
      </div>
    </aside>
  )
}

export default Sidebar