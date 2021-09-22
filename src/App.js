import './App.css'
import { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import TextField from '@mui/material/TextField'
function App() {
  const [regPageNum, setRegPageNum] = useState(1)
  const [userName, setUserName] = useState('')
  const [userNameWar, setUserNameWar] = useState(false)
  const userNameRef = useRef()
  const [userSurname, setUserSurname] = useState('')
  const [userSurnameWar, setUserSurnameWar] = useState(false)
  const userSurnameRef = useRef()
  const [userEmail, setUserEmail] = useState('')
  const [userEmailWar, setUserEmailWar] = useState(false)
  const userEmailRef = useRef()
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordWar, setUserPasswordWar] = useState(false)
  const userPasswordRef = useRef()
  const [userRepeatePassword, setUserRepeatePassword] = useState('')
  const [userRepeaTePasswordWar, setUserRepeatePasswordWar] = useState(false)
  const userRepeatPasswordRef = useRef()
  const [userPaswordMatchWar, setUserPaswordMatchWar] = useState(false)
  const [userEmailType, setUserEmailType] = useState(false)
  const [userBirthDay, setUserBirthDay] = useState('')
  const [userBirthDayWar, setUserBirthDaydWar] = useState(false)
  const userBirthDayRef = useRef()
  const [userBirthMonth, setUserBirthMonth] = useState('')
  const [userBirthMonthWar, setUserBirthMonthdWar] = useState(false)
  const userBirthMonthRef = useRef()
  const [userBirthYear, setUserBirthYear] = useState('')
  const [userBirthYearWar, setUserBirthYeardWar] = useState(false)
  const userBirthYearRef = useRef()
  const infoAdd = (e) => {
    e.preventDefault()
    if (!userName) {
      setUserNameWar(true)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
      userNameRef.current.focus()
    } else if (!userSurname) {
      setUserNameWar(false)
      setUserSurnameWar(true)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
      userSurnameRef.current.focus()
    } else if (!userEmail) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(true)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
      userEmailRef.current.focus()
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        userEmail,
      )
    ) {
      setUserEmailType(true)
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      userEmailRef.current.focus()
    } else if (!userPassword) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(true)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
      userPasswordRef.current.focus()
    } else if (!userRepeatePassword) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(true)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
      userRepeatPasswordRef.current.focus()
    } else if (userPassword !== userRepeatePassword) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(true)
      setUserEmailType(false)
      userRepeatPasswordRef.current.focus()
    } else {
      setRegPageNum(2)
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
    }
    if (regPageNum === 2) {
      if (!userBirthDay) {
        setUserBirthDaydWar(true)
        setUserBirthMonthdWar(false)
        setUserBirthYeardWar(false)
        console.log('gadasuli')
      } else if (!userBirthMonth) {
        setUserBirthMonthdWar(true)
        setUserBirthYeardWar(false)
        setUserBirthDaydWar(false)
      } else if (!userBirthYear) {
        setUserBirthYeardWar(true)
        setUserBirthMonthdWar(false)
        setUserBirthDaydWar(false)
      }
    }
  }

  function getAllYears() {
    let year = []
    for (let i = 2021; i >= 1980; i--) {
      year.push(i)
    }
    return year
  }
  let years = getAllYears()
  // const monthName
  function getAllMonths() {
    let month = []
    for (let i = 1; i <= 31; i++) {
      month.push(i)
    }
    return month
  }
  let months = getAllMonths()

  function getAllDays() {
    let day = []
    for (let i = 1; i <= 31; i++) {
      day.push(i)
    }
    return day
  }
  let days = getAllDays()

  return (
    <>
      <div class="l-form">
        <form onSubmit={(e) => infoAdd(e)} class="form">
          {regPageNum === 1 && (
            <>
              {' '}
              <h1 class="form__title">რეგისტრაცია</h1>
              <div className="registration-2comp">
                <div class="form__div">
                  <TextField
                    inputRef={userNameRef}
                    id="outlined-basic"
                    label="სახელი"
                    variant="outlined"
                    value={userName}
                    onChange={(e) => (
                      <>
                        {setUserName(e.target.value)} {setUserNameWar(false)}
                      </>
                    )}
                  />
                  {userNameWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <TextField
                    inputRef={userSurnameRef}
                    id="outlined-basic"
                    label="გვარი"
                    variant="outlined"
                    value={userSurname}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserSurname(e.target.value)}{' '}
                        {setUserSurnameWar(false)}
                      </>
                    )}
                  />
                  {userSurnameWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
              <div className="registration-1comp">
                <div class="form__div">
                  <TextField
                    inputRef={userEmailRef}
                    id="outlined-basic"
                    label="ელ-ფოსტა"
                    variant="outlined"
                    value={userEmail}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserEmail(e.target.value)} {setUserEmailWar(false)}
                      </>
                    )}
                  />
                  {userEmailWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                  {userEmailType && (
                    <div className="warning-view">არასწორი ფორმატი</div>
                  )}
                </div>
              </div>
              <div className="registration-2comp">
                <div class="form__div">
                  <TextField
                    inputRef={userPasswordRef}
                    id="outlined-basic"
                    label="პაროლი"
                    variant="outlined"
                    value={userPassword}
                    type="password"
                    onChange={(e) => (
                      <>
                        {setUserPassword(e.target.value)}
                        {setUserPasswordWar(false)}{' '}
                        {setUserPaswordMatchWar(false)})
                      </>
                    )}
                  />

                  {/* {userPaswordMatchWar && (
                    <div className="warning-view">პაროლები არ ემთხვევა</div>
                  )} */}
                  {userPasswordWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <TextField
                    inputRef={userRepeatPasswordRef}
                    id="outlined-basic"
                    label="გაიმეორეთ პაროლი"
                    type="password"
                    variant="outlined"
                    value={userRepeatePassword}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserRepeatePassword(e.target.value)}{' '}
                        {setUserRepeatePasswordWar(false)}{' '}
                        {setUserPaswordMatchWar(false)}
                      </>
                    )}
                  />
                  {userPaswordMatchWar && (
                    <div className="warning-view">პაროლი არ ემთხვევა</div>
                  )}
                  {userRepeaTePasswordWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
            </>
          )}
          {regPageNum === 2 && (
            <>
              {' '}
              <h1 class="form__title">რეგისტრაცია</h1>
              <div className="registration-3comp">
                <div class="form__div">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">დღე</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userBirthDay}
                      label="დღე"
                      onChange={(e) => (
                        <>
                          {' '}
                          {setUserBirthDay(e.target.value)}
                          {setUserBirthDaydWar(false)}
                        </>
                      )}
                    >
                      {days.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                  {userBirthDayWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">თვე</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userBirthMonth}
                      label="თვე"
                      onChange={(e) => (
                        <>
                          {' '}
                          {setUserBirthMonth(e.target.value)}{' '}
                          {setUserBirthMonthdWar(false)}
                        </>
                      )}
                    >
                      <MenuItem value={'01'}>იანვარი</MenuItem>
                      <MenuItem value={'02'}>თებერვალი</MenuItem>
                      <MenuItem value={'03'}>მარტი</MenuItem>
                      <MenuItem value={'04'}>აპრილი</MenuItem>
                      <MenuItem value={'05'}>მაისი</MenuItem>
                      <MenuItem value={'06'}>ივნისი</MenuItem>
                      <MenuItem value={'07'}>ივლისი</MenuItem>
                      <MenuItem value={'08'}>აგვისტო</MenuItem>
                      <MenuItem value={'09'}>სექტემბერი</MenuItem>
                      <MenuItem value={'10'}>ოქტომბერი</MenuItem>
                      <MenuItem value={'11'}>ნოემბერი</MenuItem>
                      <MenuItem value={'12'}>დეკემბერი</MenuItem>
                    </Select>
                  </FormControl>
                  {userBirthMonthWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">წელი</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={userBirthYear}
                      label="წელი"
                      onChange={(e) => (
                        <>
                          {' '}
                          {setUserBirthYear(e.target.value)}{' '}
                          {setUserBirthYeardWar(false)}{' '}
                        </>
                      )}
                    >
                      {years.map((item) => {
                        return <MenuItem value={item}>{item}</MenuItem>
                      })}
                    </Select>
                  </FormControl>
                  {userBirthYearWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
              <div className="registration-1comp">
                <div class="form__div">
                  <TextField
                    inputRef={userEmailRef}
                    id="outlined-basic"
                    label="ელ-ფოსტა"
                    variant="outlined"
                    value={userEmail}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserEmail(e.target.value)} {setUserEmailWar(false)}
                      </>
                    )}
                  />
                  {userEmailWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                  {userEmailType && (
                    <div className="warning-view">არასწორი ფორმატი</div>
                  )}
                </div>
              </div>
            </>
          )}
          <input type="submit" class="form__button" value="გაგრძელება" />{' '}
        </form>
      </div>
    </>
  )
}

export default App
