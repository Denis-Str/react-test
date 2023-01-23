const inputClick = () => console.log('click')
const helpText = 'input text'

const input = () => {
  return (
    <div className='input-component'>
      <input
        placeholder={helpText}
        onClick={inputClick}
      />
      <div>{helpText === 'input text' ? 1 : 2}</div>
    </div>
  )
}

export default input;
