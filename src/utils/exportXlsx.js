import { Message } from 'element-ui'

export const initXlsx = (res,name) => {
  try {
    const blob = new Blob([[res]])
    if (res.type.indexOf('application/json') > -1) {
      let reader = new FileReader()
      reader.readAsText(blob)
      reader.onload = e => {
        const result = JSON.parse(e.target.result)
        Message.error(result.msg || '导出失败')
      }
    } else {
      if ("download" in document.createElement('a')) {
        const elink = document.createElement('a')
        elink.download = name
        elink.style.display = 'none'
        elink.href = URL.createObjectURL(blob)
        document.body.appendChild(elink)
        elink.click()
        URL.revokeObjectURL(elink.href)
        document.body.removeChild(elink)
      } else {
        navigator.msSaveBlob(blob, name);
      }
    }
  } catch (err) {
    console.log(err)    
  }
}