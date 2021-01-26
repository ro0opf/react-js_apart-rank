// src/ui/calendar/CalendarContents.tsx
import React, { useState } from 'react'
import CircleBorder from '../common/CircleBorder'
import Wrapper from './CalendarContents.css'
import SubscriptionList from './SubscriptionList'
import leftArrowS from '../../image/icon/ic_left_arrow_s.svg'
import rightArrowS from '../../image/icon/ic_right_arrow_s.svg'
import downArrow from '../../image/icon/ic_down_arrow.svg'
let dummyData = [
  {
    date: '12월 25일',
    data: [
      {
        apartName: '힐스테이트분당',
        code: 0,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 2,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 4,
        price: 20000,
        areaPrice: 25000,
      },
    ],
  },
  {
    date: '12월 26일',
    data: [
      {
        apartName: '힐스테이트분당',
        code: 1,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 5,
        price: 20000,
        areaPrice: 25000,
      },
      {
        apartName: '힐스테이트분당',
        code: 3,
        price: 20000,
        areaPrice: 25000,
      },
    ],
  },
]

function CalendarContents() {
  let monthList = ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월']
  let [selectMonth, setSelectMonth] = useState<number>(new Date().getMonth())
  let [selectYear, setSelectYear] = useState<number>(new Date().getFullYear())
  let typeList = [
    { color: '#F86565', type: 'APT특별공급', code: 0, isSelect: useState<boolean>(true) },
    { color: '#6585F8', type: 'APT1순위', code: 1, isSelect: useState<boolean>(true) },
    { color: '#EC9657', type: 'APT2순위', code: 2, isSelect: useState<boolean>(true) },
    { color: '#9163F3', type: '오피스텔', code: 3, isSelect: useState<boolean>(true) },
    { color: '#90D44C', type: '민간임대', code: 4, isSelect: useState<boolean>(true) },
    { color: '#696969', type: '무순위/취소 후 재공급', code: 5, isSelect: useState<boolean>(true) },
  ]

  return (
    <Wrapper>
      <div className="Year">
        <img
          src={leftArrowS}
          onClick={() => {
            setSelectYear(selectYear - 1)
          }}
        />
        <span>{selectYear}년</span>
        <img className="ButtonDown" src={downArrow} />
        <img
          src={rightArrowS}
          onClick={() => {
            setSelectYear(selectYear + 1)
          }}
        />
      </div>

      <div className="Months">
        {monthList.map((month, index) => {
          return (
            <div
              key={index}
              className={selectMonth == index ? 'SelectedMonth' : ''}
              onClick={() => {
                setSelectMonth(index)
              }}
            >
              {month}
            </div>
          )
        })}
      </div>

      <div className="Types">
        {typeList.map((type, index) => {
          return (
            <CircleBorder
              key={index}
              borderColor={type.color}
              innerColor={type.color}
              isSelect={type.isSelect[0]}
              text={type.type}
              onClick={() => {
                type.isSelect[1](!type.isSelect[0])
              }}
              fontSize="12px"
            />
          )
        })}
      </div>

      <SubscriptionList rows={dummyData} />
    </Wrapper>
  )
}

export default CalendarContents