import React from 'react'

export default function InputElement (props) {
  var items = [1, 2]

  const {
    onChange,
  } = props

  const debounce = (f, lazy = 100) => {
    var __timeout = null
    return function _debounce () {
      var args = arguments
      clearTimeout(__timeout)
      __timeout = setTimeout(function () {
        clearTimeout(__timeout)
        f.apply(null, args)
      }, lazy)
    }
  }
  
  const search = React.useCallback(
    debounce(function () { 
      console.log('arguments = ', arguments)
    }),
    [items]
  )

  const _onChange = ({ target }) => {
    const _value = target.value
    if (!_value) { return }
    search(_value)
  }

  return (
    <>
      <input type="text"
        onChange={_onChange}
      />
    </>
  )
}
