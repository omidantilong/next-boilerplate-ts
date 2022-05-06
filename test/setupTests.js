import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
//import { server } from "@/local/server"

beforeAll(() => {
  //server.listen()
  window.scrollTo = () => {};
  global.IntersectionObserver = class IntersectionObserver {
    constructor() {}
    disconnect() {
      return null;
    }
    observe() {
      return null;
    }
    takeRecords() {
      return null;
    }
    unobserve() {
      return null;
    }
  };
});

afterEach(() => {
  //server.resetHandlers()
});

afterAll(() => {
  //server.close()
});
