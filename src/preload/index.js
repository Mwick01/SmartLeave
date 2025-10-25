import { contextBridge, ipcRenderer } from 'electron'
import { electronAPI } from '@electron-toolkit/preload'

// Custom APIs for renderer
const api = {
  adminLogin: (credentials) => ipcRenderer.invoke('admin-login', credentials),
}

// Expose APIs safely
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld('electron', electronAPI)
    contextBridge.exposeInMainWorld('api', api)
  } catch (error) {
    console.error('Error exposing preload APIs:', error)
  }
} else {
  window.electron = electronAPI
  window.api = api
}
