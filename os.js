import * as os from 'os'

export const objOs = {
  '--EOL': os.EOL,
  '--cpus': os.cpus(),
  '--homedir': os.homedir(),
  '--username': os.userInfo().username,
  '--architecture': os.arch(),
}
