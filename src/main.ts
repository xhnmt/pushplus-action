import * as core from '@actions/core'
import axios from 'axios'

async function run(): Promise<void> {
  try {
    const token: string = core.getInput('token')
    const title: string = core.getInput('title')
    const content: string = core.getInput('content')
    const url = 'http://www.pushplus.plus/send/'
    // send request via urlencoded
    const params = new URLSearchParams()
    params.append('token', token)
    params.append('title', title)
    params.append('content', content)

    axios.defaults.timeout = 10000
    const ret = await axios.post(url, params)

    return ret.data ?? false
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
