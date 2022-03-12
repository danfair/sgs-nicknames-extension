import React, { useEffect, useState } from 'react'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormControl from '@mui/material/FormControl'
import FormLabel from '@mui/material/FormLabel'
import './App.css'

export default function App() {
  const [mode, setMode] = useState('after')

  useEffect(() => {
    chrome.storage.sync.get(['sgsNicknamesMode'], (result) => {
      setMode(result['sgsNicknamesMode'] || 'after')
    })
  })

  const handleModeChange = (e) => {
    console.log('storage', chrome.storage)
    chrome.storage.sync.set({ sgsNicknamesMode: e.target.value })
    setMode(e.target.value)
  }

  return (
    <FormControl className="sgs-nicknames-container">
      <FormLabel id="sgs-nicknames-settings">
        Shotgun Start Nicknames Settings
      </FormLabel>
      <RadioGroup
        aria-labelledby="sgs-nicknames-settings"
        defaultValue="female"
        name="radio-buttons-group"
        onChange={handleModeChange}
        value={mode}>
        <FormControlLabel
          value="disable"
          control={
            <Radio
              sx={{
                color: '#eee',
                '&.Mui-checked': {
                  color: '#fed028',
                },
              }}
            />
          }
          label="Disable"
        />
        <FormControlLabel
          value="replace"
          control={
            <Radio
              sx={{
                color: '#eee',
                '&.Mui-checked': {
                  color: '#fed028',
                },
              }}
            />
          }
          label="Replace Name (e.g. Rory McIlroy becomes The Prince of Ponte Vedra)"
        />
        <FormControlLabel
          value="middle"
          control={
            <Radio
              sx={{
                color: '#eee',
                '&.Mui-checked': {
                  color: '#fed028',
                },
              }}
            />
          }
          label='Supplement Name (e.g. Rory McIlroy becomes Rory "The Prince of Ponte Vedra" McIlroy)'
        />
        <FormControlLabel
          value="after"
          control={
            <Radio
              sx={{
                color: '#eee',
                '&.Mui-checked': {
                  color: '#fed028',
                },
              }}
            />
          }
          label="After Name (e.g. Rory McIlroy becomes Rory McIlroy (The Prince of Ponte Vedra))"
        />
      </RadioGroup>
    </FormControl>
  )
}
