// src/ui/calendar/Subscription.tsx
import React from 'react'
import Wrapper from './Subscription.css'
import Calendar from '../../data/Calendar'

interface iProps {
  row: Calendar
}

let typeList = [
  { color: '#F86565', type: 'APT특별공급', code: 0 },
  { color: '#6585F8', type: 'APT1순위', code: 1 },
  { color: '#EC9657', type: 'APT2순위', code: 2 },
  { color: '#9163F3', type: '오피스텔', code: 3 },
  { color: '#90D44C', type: '민간임대', code: 4 },
  { color: '#696969', type: '무순위/취소 후 재공급', code: 5 },
]

function onClickSubscription(houseManageNo: string) {
  window.open('', 'TheWindow')
  let form = document.getElementById(houseManageNo)
  if (form) (form as HTMLFormElement).submit()
}

function getDetailUrl(typeCd: number) {
  if ([3, 4].includes(typeCd)) {
    return 'https://www.applyhome.co.kr/ai/aia/selectPRMOLttotPblancDetailView.do'
  } else if ([5].includes(typeCd)) {
    return 'https://www.applyhome.co.kr/ai/aia/selectAPTRemndrLttotPblancDetailView.do'
  } else {
    return 'https://www.applyhome.co.kr/ai/aia/selectAPTLttotPblancDetail.do'
  }
}
function Subscription(props: iProps) {
  return (
    <Wrapper
      color={typeList[parseInt(props.row.rcept_se) - 1].color}
      onClick={() => {
        onClickSubscription(props.row.house_manage_no)
      }}
    >
      <form
        id={props.row.house_manage_no}
        method="post"
        action={getDetailUrl(parseInt(props.row.rcept_se) - 1)}
        target="TheWindow"
      >
        <input type="hidden" name="houseManageNo" value={props.row.house_manage_no} />
        <input type="hidden" name="pblancNo" value={props.row.pblanc_no} />
        <input type="hidden" name="houseSecd" value={props.row.house_secd} />
        <input type="hidden" name="gvPgmId" value="AIB01M01" />
      </form>
      <div className="Color" />
      <div className="Contents">
        <div className="NameAndType">
          <span className="Name">{props.row.house_nm}</span>
          <div>
            <span className="Dot">● </span>
            <span className="Type">{typeList[parseInt(props.row.rcept_se) - 1].type}</span>
          </div>
        </div>

        {/* <div className="Price">
          <span>분양가(평당)</span>

          <span>{props.row.house_manage_no}원</span>
        </div> */}
      </div>
    </Wrapper>
  )
}

export default Subscription
