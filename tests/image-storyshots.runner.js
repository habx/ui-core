import initStoryshots from '@storybook/addon-storyshots'
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer'
import puppeteer  from 'puppeteer'

const IGNORED_STORIES = []
const getMatchOptions = options => {
  if (IGNORED_STORIES.includes(options.context.name)) {
    return {
      failureThresholdType: 'percent',
      failureThreshold: 1,
    }
  }
  return {
    failureThreshold: 0.02,
    failureThresholdType: 'percent',
  }
}

const beforeScreenshot = async () => {}

let browser
const getCustomBrowser = async () => {
  browser = await puppeteer.launch({
    args: [
      '--no-sandbox ',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-web-security',
    ],
    headless: process.env.HEADLESS !== 'false',
  })
  return browser
}
let afterAll = () => {
  if (browser) {
    browser.close()
  }
}

const beforeAll = async page => {
  await page.waitForNavigation({ waitUntil: 'networkidle0' })
  await page.waitFor(500)
}

const test = imageSnapshot({
  storybookUrl: `file://${__dirname}/../.storybook-static`,
  beforeScreenshot,
  getMatchOptions,
  getCustomBrowser,
  beforeAll,
})
test.afterAll = afterAll

initStoryshots({
  suite: 'snapshots',
  test,
})
