import './App.css'
import { useState } from 'react'

function App() {
  const [regPageNum, setRegPageNum] = useState(1)
  const [userName, setUserName] = useState('')
  const [userNameWar, setUserNameWar] = useState(false)
  const [userSurname, setUserSurname] = useState('')
  const [userSurnameWar, setUserSurnameWar] = useState(false)
  const [userEmail, setUserEmail] = useState('')
  const [userEmailWar, setUserEmailWar] = useState(false)
  const [userPassword, setUserPassword] = useState('')
  const [userPasswordWar, setUserPasswordWar] = useState(false)
  const [userRepeatePassword, setUserRepeatePassword] = useState('')
  const [userRepeaTePasswordWar, setUserRepeatePasswordWar] = useState(false)
  const [userPaswordMatchWar, setUserPaswordMatchWar] = useState(false)
  const [userEmailType, setUserEmailType] = useState(false)

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
    } else if (!userSurname) {
      setUserNameWar(false)
      setUserSurnameWar(true)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
    } else if (!userEmail) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(true)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
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
    } else if (!userPassword) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(true)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
    } else if (!userRepeatePassword) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(true)
      setUserPaswordMatchWar(false)
      setUserEmailType(false)
    } else if (userPassword !== userRepeatePassword) {
      setUserNameWar(false)
      setUserSurnameWar(false)
      setUserEmailWar(false)
      setUserPasswordWar(false)
      setUserRepeatePasswordWar(false)
      setUserPaswordMatchWar(true)
      setUserEmailType(false)
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
  }
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
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    value={userName}
                    onChange={(e) => (
                      <>
                        {setUserName(e.target.value)} {setUserNameWar(false)}
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    სახელი
                  </label>
                  {userNameWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    value={userSurname}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserSurname(e.target.value)}{' '}
                        {setUserSurnameWar(false)}
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    გვარი
                  </label>
                  {userSurnameWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
              <div className="registration-1comp">
                <div class="form__div">
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    value={userEmail}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserEmail(e.target.value)} {setUserEmailWar(false)}
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    ელ-ფოსტა
                  </label>
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
                  <input
                    type="password"
                    class="form__input"
                    placeholder=" "
                    value={userPassword}
                    onChange={(e) => (
                      <>
                        {setUserPassword(e.target.value)}
                        {setUserPasswordWar(false)}{' '}
                        {setUserPaswordMatchWar(false)})
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    პაროლი
                  </label>
                  {userPaswordMatchWar && (
                    <div className="warning-view">პაროლები არ ემთხვევა</div>
                  )}
                  {userPasswordWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <input
                    type="password"
                    class="form__input"
                    placeholder=" "
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
                  <label for="" class="form__label">
                    გაიმეორეთ პაროლი
                  </label>
                  {userPaswordMatchWar && (
                    <div className="warning-view">პაროლები არ ემთხვევა</div>
                  )}
                  {userRepeaTePasswordWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
              <input type="submit" class="form__button" value="გაგრძელება" />{' '}
            </>
          )}
          {regPageNum === 2 && (
            <>
              {' '}
              <h1 class="form__title">მეორე ნაწილი</h1>
              <div className="registration-2comp">
                <div class="form__div">
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    value={userName}
                    onChange={(e) => (
                      <>
                        {setUserName(e.target.value)} {setUserNameWar(false)}
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    სახელი
                  </label>
                  {userNameWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    value={userSurname}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserSurname(e.target.value)}{' '}
                        {setUserSurnameWar(false)}
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    გვარი
                  </label>
                  {userSurnameWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
              <div className="registration-1comp">
                <div class="form__div">
                  <input
                    type="text"
                    class="form__input"
                    placeholder=" "
                    value={userEmail}
                    onChange={(e) => (
                      <>
                        {' '}
                        {setUserEmail(e.target.value)} {setUserEmailWar(false)}
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    ელ-ფოსტა
                  </label>
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
                  <input
                    type="password"
                    class="form__input"
                    placeholder=" "
                    value={userPassword}
                    onChange={(e) => (
                      <>
                        {setUserPassword(e.target.value)}
                        {setUserPasswordWar(false)}{' '}
                        {setUserPaswordMatchWar(false)})
                      </>
                    )}
                  />
                  <label for="" class="form__label">
                    პაროლი
                  </label>
                  {userPaswordMatchWar && (
                    <div className="warning-view">პაროლები არ ემთხვევა</div>
                  )}
                  {userPasswordWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>

                <div class="form__div">
                  <input
                    type="password"
                    class="form__input"
                    placeholder=" "
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
                  <label for="" class="form__label">
                    გაიმეორეთ პაროლი
                  </label>
                  {userPaswordMatchWar && (
                    <div className="warning-view">პაროლები არ ემთხვევა</div>
                  )}
                  {userRepeaTePasswordWar && (
                    <div className="warning-view">სავალდებულო ველი</div>
                  )}
                </div>
              </div>
              <input type="submit" class="form__button" value="გაგრძელება" />{' '}
            </>
          )}
        </form>
      </div>
    </>
  )
}

export default App
