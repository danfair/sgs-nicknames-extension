import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import OptionItem from './OptionItem'
import { options } from '../utils/config'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export default () => {
  const [mode, setMode] = useState('after')

  useEffect(() => {
    chrome.storage?.sync.get(['sgsNicknamesMode'], (result) => {
      setMode(result['sgsNicknamesMode'] || 'after')
    })
  }, [])

  const handleModeChange = (e) => {
    chrome.storage.sync.set({ sgsNicknamesMode: e.target.value })
    setMode(e.target.value)
  }

  return (
    <Form>
      {options.map((option) => (
        <OptionItem
          option={option}
          handleModeChange={handleModeChange}
          key={option.value}
          isActive={mode === option.value}
        />
      ))}
    </Form>
  )
}
