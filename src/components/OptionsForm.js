import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import OptionItem from './OptionItem'
import { options, colors } from '../utils/config'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: calc(100% - 2rem);
  margin: 1rem;
  background: white;
  padding: 0.5rem 1rem 1rem;
`

const Title = styled.h1`
  color: ${colors.blue};
  font-family: 'BrandonGrotesque';
  font-size: 1.5rem;
  margin-bottom: 1rem;
`

export default () => {
  const [mode, setMode] = useState('aka')

  useEffect(() => {
    chrome.storage?.sync.get(['sgsNicknamesMode'], (result) => {
      setMode(result['sgsNicknamesMode'] || 'aka')
    })
  }, [])

  const handleModeChange = (e) => {
    chrome.storage.sync.set({ sgsNicknamesMode: e.target.value })
    setMode(e.target.value)
  }

  return (
    <Form>
      <Title>Shotgun Start Nickname Inserter Options</Title>
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
