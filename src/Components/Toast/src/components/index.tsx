import React, { Component } from 'react'
import { observer } from 'mobx-react'
import Portal from '~components/Helper/src/components/portal'
import store from '../stores'
import styled from 'styled-components'
import { GUTTER, COLOR_DARK, COLOR_GRAY } from '~components/Config/src'
import { gettext } from '~components/Language/src'
import { rgba } from 'polished'

const StyledToast = styled.div`
  position: fixed;
  bottom: 4rem;
  width: 20rem;
  max-width: 80vw;
  left: 50%;
  transform: translateX(-50%);
  background: ${rgba(COLOR_DARK, 0.85)};
  color: ${COLOR_GRAY};
  border-radius: ${GUTTER};
  padding: calc(${GUTTER} / 2) ${GUTTER};
  cursor: pointer;
  word-break: normal;
  text-align: center;
`

@observer
class Toast extends Component {
  public render() {
    const { isOpen, msg, close } = store

    if (!isOpen) {
      return null
    }

    return (
      <Portal>
        <StyledToast title={gettext('Click to close')} onClick={() => close()}>
          {msg}
        </StyledToast>
      </Portal>
    )
  }
}

export default Toast
