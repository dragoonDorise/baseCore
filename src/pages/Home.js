//import { useHistory } from "react-router-dom";

//Default BaseCore components
import {
  BtnSimple,
  BtnSwitch,
  Icon,
  LinkSimple,
  Img,
  List,
  LoaderCircle,
  ProgressBar,
  FormInputSimple,
  FormSelectSimple,
  FormRadioSimple,
  FormCheckboxSimple,
  FormInputRangeSimple,
} from "getbasecore/Atoms?sdf=01";

import {
  Pagination,
  Form,
  Alert,
  Table,
  Accordion,
  Breadcrumb,
  Dropdown,
  Tabs,
} from "getbasecore/Molecules?id=122";

// export { Modal } from "./src/components/molecules/Modal/Modal";
// export { Tooltip } from "./src/components/molecules/Tooltip/Tooltip";

//Import app strings
const content = require("../data/lang.es.json");
const homeContent = content.home;

const dummyFunct = () => {
  return true;
};

export const Home = () => {
  //let history = useHistory();

  return (
    <main>
      <div className="container">
        <Tabs
          tabList={["Tab 1", "Tab 2"]}
          tabContent={["Tab 1 content", "Tab 2 content"]}
        />
        <div>
          <Dropdown
            css="btn-simple btn-simple--1"
            text="Dropdown Menu"
            direction="up"
          >
            <ul>
              <li role="menuitem">
                <LinkSimple css="link-simple--1" href="https://google.com">
                  Simple Link
                </LinkSimple>
              </li>
              <li role="menuitem">
                <LinkSimple css="link-simple--1" href="https://google.com">
                  Simple Link
                </LinkSimple>
              </li>
            </ul>
          </Dropdown>
        </div>
        <Breadcrumb
          children={{
            0: {
              active: false,
              text: "Step 10",
              link: "./a",
            },
            1: {
              active: false,
              text: "Step 20",
              link: "./b",
            },
            2: {
              active: true,
              text: "Step 30",
              link: "./c",
            },
          }}
        ></Breadcrumb>

        <Accordion
          items={{
            0: {
              title: "Lorem ipsum dolor sit",
              desc: "Sed est mi, pharetra quis tempor eu, tincidunt vel mi. Nam congue euismod neque ut ultricies. Fusce et ante eget massa vehicula auctor. Fusce aliquet, lorem sit amet varius lacinia, lectus tellus tempor orci, eget dignissim magna felis id ipsum.",
            },
            1: {
              title: "Pellentesque accumsan",
              desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent auctor condimentum faucibus. Curabitur auctor, magna semper lobortis eleifend, turpis ante euismod orci, id sollicitudin ligula turpis nec turpis. ",
            },
          }}
        />

        <p>
          Componente tabla, admite array/objeto de valores para montarla, la
          primera fila siempre será la cabecera
        </p>
        <Table
          css="table-reflow"
          description="Table description"
          items={{
            0: ["Movie Title", "Genre", "Year", "Gross"],
            1: ["Star Wars1", "Adventure. Sci-fi", "1977", "$460935665"],
            2: ["Star Wars2", "Adventure. Sci-fi", "1977", "$460935665"],
            3: ["Star Wars3", "Adventure. Sci-fi", "1977", "$460935665"],
            4: ["Star Wars4", "Adventure. Sci-fi", "1977", "$460935665"],
          }}
        />
        <p>
          Componente tabla, tambien podemos añadir los valores como html
          manualmente
        </p>

        <Table css="table-reflow" description="Table description">
          <thead>
            <tr>
              <th>Movie Title</th>
              <th>Genre</th>
              <th>Year</th>
              <th>Gross</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td data-th="Movie Title">Star Wars1</td>
              <td data-th="Genre">Adventure. Sci-fi</td>
              <td data-th="Year">1977</td>
              <td data-th="Gross">$460935665</td>
            </tr>
          </tbody>
        </Table>
        <Alert css="alert--success" close={true}>
          Pepep
        </Alert>
        <h1 className="h1">{homeContent.title}</h1>
        <BtnSimple type="button" css="btn-simple--1" aria="This is a button">
          Button #1
        </BtnSimple>
        <BtnSimple type="button" css="btn-simple--2" aria="This is a button">
          Button #2
        </BtnSimple>
        <BtnSwitch name="switcharo" onChange={dummyFunct} />
        <Icon icon="close" css="icon--xs" />
        <br />
        <LinkSimple css="link-simple--1" href="https://google.com">
          Simple Link
        </LinkSimple>
        <Img
          src="logo192.png"
          srcXS="xs.png"
          srcSM="sm.png"
          srcMD="md.png"
          srcLG="lg.png"
          srcXL="xl.png"
          css="img-no-responsive"
          alt="responsive Img"
        />
        <List css="list--bullets" children={[1, 2, 3, 4]}></List>
        <List
          css="list--icons list--icons--xs"
          children={[
            ["twitter", "Lorem ipsum a"],
            ["close", "Lorem ipsum b"],
            ["twitter", "Lorem ipsum cc"],
            ["twitter", "Lorem ipsum d"],
          ]}
        ></List>
        <LoaderCircle aria="loading" />
        <ProgressBar value="800" max="900" css="progress--success" />
        <Pagination name="pepe" />
        <Form css="form--simple">
          <FormInputSimple
            name="formu-input"
            type="text"
            placeholder="Formulario"
            label="formulario"
          />
          <FormSelectSimple name="formu-inputa" label="select">
            <option value="1">Option #1</option>
            <option value="2">Option #2</option>
          </FormSelectSimple>
          <FormRadioSimple
            name="formu-inputasa"
            label="option radio"
            id="option1"
          />
          <FormRadioSimple
            name="formu-inputasa"
            label="option radio 2"
            id="option2"
          />
          <FormCheckboxSimple
            name="formu-input-checbox"
            label="Checkbox"
            id="check1"
            value={1}
          />
          <FormCheckboxSimple
            name="formu-input-checbox"
            id="check2"
            label="Checkbox checked"
          />
          <FormInputRangeSimple
            name="formu-input-range"
            min={0}
            max={10}
            step={1}
            id="stepper"
            type="text"
            label="Input Range"
          />
        </Form>
      </div>
      <div className="container container--grid">
        <div data-col-xs="2" data-col-sm="6">
          50% width column
        </div>
        <div data-col-xs="2" data-col-sm="6">
          50% width column
        </div>
      </div>
    </main>
  );
};
