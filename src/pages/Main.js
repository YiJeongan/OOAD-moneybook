import { useState, useEffect,  } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Table from 'react-bootstrap/Table';


function Main(){
    
    let [balance, setBalance] = useState(0);
    let [income, setIncome] = useState(null);
    let [expense, setExpense] = useState(null);
    let [expenseTitle, setExpenseTitle] = useState("지출분야");
    let [transactions, setTransactions] = useState([]);
    let [exfood, setExfood] = useState(0);
    let [exts, setExts] = useState(0);
    let [exnec, setExnec] = useState(0);
    let [exub, setExub] = useState(0);
    let [exsh, setExsh] = useState(0);
    let [exetc, setExetc] = useState(0);
    let [foodbal, setfoodbal] = useState(0);
    let [tsbal, setTsbal] = useState(0);
    let [necbal, setNecbal] = useState(0);
    let [ubbal, setUbbal] = useState(0);
    let [shbal, setShbal] = useState(0);
    let [etcbal, setEtcbal] = useState(0);

    useEffect(() => {
        const storedBalance = localStorage.getItem('총잔액');
        if (storedBalance) {
          setBalance(parseInt(storedBalance));
        }
      }, []);

      useEffect(() => {
        const storedTransactions = localStorage.getItem('transactions');
        if (storedTransactions) {
          setTransactions(JSON.parse(storedTransactions));
        }
      }, []);
      

      useEffect(() => {
        // expenseTitle이 변경될 때만 setExpenseTitle 함수 호출
        setExpenseTitle(expenseTitle);
      }, [expenseTitle]);

    function handleIncomeSubmit(e){
        e.preventDefault();
        const newBalance = balance + (+income);

        const transaction = {
          id: Date.now(), // 고유한 ID 생성 (현재 시간 사용)
          type: "+",
          category: "수입",
          amount: income,
          balance: newBalance
        };
      
        // transactions 배열에 거래 항목 추가

        const updatedTransactions = [...transactions, transaction];
        setTransactions(updatedTransactions);
        localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
        
        setBalance(newBalance)
        localStorage.setItem('총잔액', newBalance)
        console.log('Income submitted:', income);
    }

    function handleExpenseSubmit(e){
      e.preventDefault();
      const newBalance = balance - (+expense);

      const transaction = {
        id: Date.now(), // 고유한 ID 생성 (현재 시간 사용)
        type: "-",
        category: expenseTitle,
        amount: expense,
        balance: newBalance
      };

      // transactions 배열에 거래 항목 추가
      const updatedTransactions = [...transactions, transaction];
      setTransactions(updatedTransactions);
      localStorage.setItem('transactions', JSON.stringify(updatedTransactions));
      setBalance(newBalance)
      localStorage.setItem('총잔액', newBalance)
      
      console.log('Expense submitted:', expense);

      calculateExpense();
  }

  function calculateExpense(){
    if(expenseTitle === "식비"){
      const newEx = exfood + (+expense)
      setExfood(newEx);
      localStorage.setItem('지출식비', newEx)

      const newBal = parseInt(localStorage.getItem('희망식비'))-(+newEx)
      setfoodbal(newBal)
      localStorage.setItem('식비잔액',newBal)

      if(newBal < 0){
        localStorage.setItem('식비상태', '과소비')
      }else{
        localStorage.setItem('식비상태', '여유')
      }
    }
    if(expenseTitle === "교통비"){
      const newEx = exts + (+expense)
      setExts(newEx);
      localStorage.setItem('지출교통비', newEx)

      const newBal = parseInt(localStorage.getItem('희망교통비'))-(+newEx)
      setTsbal(newBal)
      localStorage.setItem('교통비잔액',newBal)

      if(newBal < 0){
        localStorage.setItem('교통비상태', '과소비')
      }else{
        localStorage.setItem('교통비상태', '여유')
      }
    }
    if(expenseTitle === "생필품"){
      const newEx = exnec + (+expense)
      setExnec(newEx);
      localStorage.setItem('지출생필품', newEx)

      const newBal = parseInt(localStorage.getItem('희망생필품비'))-(+newEx)
      setNecbal(newBal)
      localStorage.setItem('생필품잔액',newBal)

      if(newBal < 0){
        localStorage.setItem('생필품상태', '과소비')
      }else{
        localStorage.setItem('생필품상태', '여유')
      }
    }
    if(expenseTitle === "공과금"){
      const newEx = exub + (+expense)
      setExub(newEx);
      localStorage.setItem('지출공과금', newEx)

      const newBal = parseInt(localStorage.getItem('희망공과금'))-(+newEx)
      setUbbal(newBal)
      localStorage.setItem('공과금잔액',newBal)

      if(newBal < 0){
        localStorage.setItem('공과금상태', '과소비')
      }else{
        localStorage.setItem('공과금상태', '여유')
      }
    }
    if(expenseTitle === "쇼핑"){
      const newEx = exsh + (+expense)
      setExsh(newEx);
      localStorage.setItem('지출쇼핑비', newEx)

      const newBal = parseInt(localStorage.getItem('희망쇼핑비'))-(+newEx)
      setShbal(newBal)
      localStorage.setItem('쇼핑비잔액',newBal)

      if(newBal < 0){
        localStorage.setItem('쇼핑비상태', '과소비')
      }else{
        localStorage.setItem('쇼핑비상태', '여유')
      }
    }
    if(expenseTitle === "기타"){
      const newEx = exetc + (+expense)
      setExetc(newEx);
      localStorage.setItem('지출기타', newEx)
    
      const newBal = parseInt(localStorage.getItem('희망기타비용'))-(+newEx)
      setEtcbal(newBal)
      localStorage.setItem('기타비용잔액',newBal)

      if(newBal < 0){
        localStorage.setItem('기타비용상태', '과소비')
      }else{
        localStorage.setItem('기타비용상태', '여유')
      }
    }
  }


    return(
        <>
        <Navbar bg="light">
            <Container>
               <Navbar.Brand href="/">희망지출가계부</Navbar.Brand>
            </Container>
        </Navbar>
        <h3>잔액</h3>
        <Card style={{ width: '18rem' }}>
      <ListGroup variant="flush">
        <ListGroup.Item>{balance}<p>원</p></ListGroup.Item>
      </ListGroup>
    </Card>

    <Tabs defaultActiveKey="수입/지출">
      <Tab eventKey="수입/지출" title="수입/지출">
        <p>수입</p>
        <Form onSubmit={(handleIncomeSubmit)}>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">+</InputGroup.Text>
            <Form.Control
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              type="number"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </InputGroup>
        </Form>
        <p>지출</p>
        <Form onSubmit={(handleExpenseSubmit)}>
      <InputGroup className="mb-3">
        <DropdownButton
          variant="outline-secondary"
          title= {expenseTitle}
          id="input-group-dropdown-1"
        >
          <Dropdown.Item href="#" onClick={() => setExpenseTitle("식비")}>식비</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setExpenseTitle("교통비")}>교통비</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setExpenseTitle("생필품")}>생필품</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setExpenseTitle("공과금")}>공과금</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setExpenseTitle("쇼핑")}>쇼핑</Dropdown.Item>
          <Dropdown.Item href="#" onClick={() => setExpenseTitle("기타")}>기타</Dropdown.Item>
        </DropdownButton>
        <Form.Control 
          aria-label="Text input with dropdown button" 
          type="number"
          value={expense}
          onChange={(e)=>setExpense(e.target.value)}
          />
      </InputGroup>
      </Form>
      </Tab>

      <Tab eventKey="List" title="List">
      <Table>
      <thead>
        <tr>
          <th>+/-</th>
          <th>분류</th>
          <th>금액</th>
          <th>잔액</th>
        </tr>
      </thead>
      <tbody>
      {transactions.map((transaction) => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.category}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.balance}</td>
        </tr>
      ))}
    </tbody>
    </Table>
      </Tab>

      <Tab eventKey="소비상황" title="소비상황">
        <Table>
      <thead>
        <tr>
          <th>분류</th>
          <th>희망소비</th>
          <th>지출</th>
          <th>잔액</th>
          <th>상황</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>식비</td>
          <td>{localStorage.getItem('희망식비')}</td>
          <td>{localStorage.getItem('지출식비')}</td>
          <td>{localStorage.getItem('식비잔액')}</td>
          <td>{localStorage.getItem('식비상태')}</td>
        </tr>
        <tr>
          <td>교통비</td>
          <td>{localStorage.getItem('희망교통비')}</td>
          <td>{localStorage.getItem('지출교통비')}</td>
          <td>{localStorage.getItem('교통비잔액')}</td>
          <td>{localStorage.getItem('교통비상태')}</td>
        </tr>
        <tr>
          <td>생필품</td>
          <td>{localStorage.getItem('희망생필품비')}</td>
          <td>{localStorage.getItem('지출생필품')}</td>
          <td>{localStorage.getItem('생필품잔액')}</td>
          <td>{localStorage.getItem('생필품상태')}</td>
        </tr>
        <tr>
          <td>공과금</td>
          <td>{localStorage.getItem('희망공과금')}</td>
          <td>{localStorage.getItem('지출공과금')}</td>
          <td>{localStorage.getItem('공과금잔액')}</td>
          <td>{localStorage.getItem('공과금상태')}</td>
        </tr>
        <tr>
          <td>쇼핑</td>
          <td>{localStorage.getItem('희망쇼핑비')}</td>
          <td>{localStorage.getItem('지출쇼핑비')}</td>
          <td>{localStorage.getItem('쇼핑비잔액')}</td>
          <td>{localStorage.getItem('쇼핑비상태')}</td>
        </tr>
        <tr>
          <td>기타</td>
          <td>{localStorage.getItem('희망기타비용')}</td>
          <td>{localStorage.getItem('지출기타')}</td>
          <td>{localStorage.getItem('기타비용잔액')}</td>
          <td>{localStorage.getItem('기타비용상태')}</td>
        </tr>
      </tbody>
    </Table>
      </Tab>
    </Tabs>

    
        </>
    )
}

export default Main;