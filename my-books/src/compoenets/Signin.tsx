import React, { useRef } from "react";
import { Row, Col, Input, InputRef, Button } from "antd";
import styles from "./Signin.module.css";
import { InputProps } from "antd/lib/input";

interface SigninProps {}

//React.FC >> React Function Component의 줄임말로, 함수형 컴포넌트를 정의할 때 사용하는 타입
const Signin: React.FC<SigninProps> = () => {
  const emailRef = useRef<InputRef>(null);
  const passwordRef = useRef<InputRef>(null);
  function onClickEventHandler() {
    const eamil = emailRef.current?.input?.value;
    const password = passwordRef.current?.input?.value;
  }

  return (
    <Row align="middle" className={styles.signin_row}>
      <Col span={24}>
        <Row className={styles.signin_contents}>
          <Col span={12}>
            <img
              src="/bg_signin.png"
              alt="Signin"
              className={styles.signin_bg}
            />
          </Col>
          <Col span={12}>
            <div className={styles.signin_title}>My Books</div>
            <div className={styles.signin_subtitle}>
              Please Note Your Opinion
            </div>
            <div className={styles.signin_underline} />
            <div className={styles.email_title}>
              Email <span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                placeholder="Email"
                autoComplete="email"
                name="email"
                className={styles.input}
                ref={emailRef}
              ></Input>
            </div>
            <div className={styles.password_title}>
              Password<span className={styles.required}> *</span>
            </div>
            <div className={styles.input_area}>
              <Input
                type="password"
                autoComplete="current-password"
                name="password"
                className={styles.input}
                ref={passwordRef}
              ></Input>
            </div>
            <div className={styles.button_area}>
              <Button
                size="large"
                className={styles.button}
                onClick={onClickEventHandler}
              >
                Signin
              </Button>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};

export default Signin;
