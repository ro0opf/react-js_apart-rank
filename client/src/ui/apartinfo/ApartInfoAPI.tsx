import axios from 'axios'
import Apart from '../../data/Apart'
import ApartInfo from '../../data/ApartInfo'
import env from '../../data/Env'

let dummyData: Apart[] = [
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 1,
    exclusive_area: '98',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '124000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 2,
    exclusive_area: '124',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '24000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 3,
    exclusive_area: '32',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 4,
    exclusive_area: '44',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
  {
    province_nm: '12',
    city_nm: '124124',
    apt_name: '풍림 아이원',
    rank: 5,
    exclusive_area: '52',
    serial_num: '1',
    dong_nm: '124124',
    max_trans_price: '44000',
  },
]

interface AreaList {
  exclusive_area: number[]
}

export async function fetchExclusive(serial_num: string) {
  try {
    let response = await env.instance.get<AreaList>('exclusive?serial_num=' + serial_num)
    return response.data
  } catch (error) {
    console.log(error)
    return { exclusive_area: [] }
  }
}

export async function fetchExclusiveWithoutSN(serial_num: string) {
  try {
    let response = await env.instance.get<Apart>('search/detail?serial_num=' + serial_num)
    return response.data
  } catch (error) {
    console.log(error)
    return
  }
}

export async function fetchApartInfo(serial_num: string, exclusive_area: string) {
  try {
    let response = await axios.get<ApartInfo>(
      'https://api.apart-back.gq:9999/search/detail?serial_num=' + serial_num + '&exclusive_area=' + exclusive_area,
      {
        timeout: env.timeout,
      },
    )
    return response.data
  } catch (error) {
    console.log(error)
    return
  }
}

export async function fetchApartInfoWithoutSN(pr_cd: string, ct_cd: string, dong_cd: string, addr_cd: string) {
  try {
    let response = await axios.get<Apart>('https://api.apart-back.gq:9999/search/detail?serial_num=' + pr_cd, {
      timeout: env.timeout,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return { exclusive_area: [] }
  }
}

export async function fetchSharpRiseRank() {
  try {
    let response = await axios.get<Apart[]>('https://api.apart-back.gq:9999/search/soaring', {
      timeout: env.timeout,
    })
    return response.data
  } catch (error) {
    console.log(error)
    return dummyData
  }
}

export async function pSearchLog(ip: string, serial_num: string, exclusive_area: string) {
  let form = new FormData()
  form.append('client_ip', ip)
  form.append('port', window.location.port)
  form.append('serial_num', serial_num)
  form.append('exclusive_area', exclusive_area)

  try {
    let response = await env.instance.post<Apart[]>('search/log', form)
    console.log(response)
  } catch (error) {
    console.log(error)
  }
}

export async function gIP() {
  interface IP {
    ip: string
  }

  try {
    let response = await axios.get<IP>('https://api.ipify.org?format=json', {
      timeout: env.timeout,
    })

    return response.data
  } catch (error) {
    console.log(error)
    return { ip: '' }
  }
}
