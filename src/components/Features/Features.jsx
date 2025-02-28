import React from 'react'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import './Features.css'

function Features() {
  return (
    <>
      <div className="features">
        <div className="featureItem">
            <span className='featureTitle'>Revenue</span>
            <div className="featureContainer">
                <span className="featurePrice">
                $2,500
                </span>
                <span className="featureRate">
                    -11.2
                    <ArrowDownwardIcon className="featureIcon negative" />
                </span>
            </div>
            <span className="featureDescription">
            Compared to last month
            </span>
        </div>
        <div className="featureItem">
            <span className='featureTitle'>Sales</span>
            <div className="featureContainer">
                <span className="featurePrice">
                $4,100
                </span>
                <span className="featureRate">
                    -1.2
                    <ArrowDownwardIcon className="featureIcon negative" />
                </span>
            </div>
            <span className="featureDescription">
                Compared to last month
            </span>
        </div>
        <div className="featureItem">
            <span className='featureTitle'>Cost</span>
            <div className="featureContainer">
                <span className="featurePrice">
                $2,250
                </span>
                <span className="featureRate">
                    +1.2
                    <ArrowUpwardIcon className="featureIcon positive" />
                </span>
            </div>
            <span className="featureDescription">
            Compared to last month
            </span>
        </div>
      </div>
    </>
  )
}

export default Features
