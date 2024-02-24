import { render, fireEvent } from "@testing-library/react";
import Cardcom from "./Cardcom";

describe("Cardcom", () => {
  test("renders without errors", () => {
    render(<Cardcom cardNum={0} />);
    // You can add assertions here to check if the component renders without throwing any errors
  });

  test("Card changes styles when hovered", () => {
    const { getByTestId } = render(<Cardcom cardNum={0} />);
    const card = getByTestId("card");

    // Initial styles
    expect(card).toHaveStyle("backgroundColor: #F9F9F8");
    expect(card).toHaveStyle("border: 1px solid #E9E8E8");

    // Hover styles
    fireEvent.mouseEnter(card);
    expect(card).toHaveStyle("backgroundColor: #F5F5F3");
    expect(card).toHaveStyle("border: 1px solid #D3D4D4");
    expect(card).toHaveStyle("boxShadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.08)");
    expect(card).toHaveStyle("marginTop: -0.5rem");
    expect(card).toHaveStyle("marginBottom: -0.5rem");

    // Revert to initial styles
    fireEvent.mouseLeave(card);
    expect(card).toHaveStyle("backgroundColor: #F9F9F8");
    expect(card).toHaveStyle("border: 1px solid #E9E8E8");
  });

  test("CardContent changes styles when hovered", () => {
    const { getByTestId } = render(<Cardcom cardNum={0} />);
    const card = getByTestId("card");
    const cardContent = getByTestId("cardContent");

    // Initial styles
    expect(cardContent).toHaveStyle("display: flex");
    expect(cardContent).toHaveStyle("flexDirection: column");
    expect(cardContent).toHaveStyle("alignItems: center");
    expect(cardContent).toHaveStyle("alignSelf: stretch");

    // Hover styles
    fireEvent.mouseEnter(card);
    expect(cardContent).toHaveStyle("gap: 1.5rem");
    
    // Revert to initial styles
    fireEvent.mouseLeave(card);
    expect(cardContent).toHaveStyle("gap: 1rem");
  });

  test("CardTitle changes styles when hovered", () => {
    const { getByTestId } = render(<Cardcom cardNum={0} />);
    const card = getByTestId("card");
    const cardTitle = getByTestId("cardTitle");

    // Initial styles
    expect(cardTitle).toHaveStyle("display: flex");
    expect(cardTitle).toHaveStyle("alignItems: center");

    // Hover styles
    fireEvent.mouseEnter(card);
    expect(cardTitle).toHaveStyle("gap: 12px");

    // Revert to initial styles
    fireEvent.mouseLeave(card);
    expect(cardTitle).toHaveStyle("gap: 4px");
  });

  test("CardTitleContent changes styles when hovered", () => {
    const { getByTestId } = render(<Cardcom cardNum={0} />);
    const card = getByTestId("card");
    const cardTitleContent = getByTestId("cardTitleContent");

    // Initial styles
    expect(cardTitleContent).toHaveStyle("textAlign: center");
    expect(cardTitleContent).toHaveStyle("fontSize: 1rem");
    expect(cardTitleContent).toHaveStyle("fontStyle: normal");
    expect(cardTitleContent).toHaveStyle("fontWeight: 700");
    expect(cardTitleContent).toHaveStyle("lineHeight: 1.35rem");

    // Hover styles
    fireEvent.mouseEnter(card);
    expect(cardTitleContent).toHaveStyle("paddingLeft: 0.5rem");
    expect(cardTitleContent).toHaveStyle("color: #2b70d7");
    
    // Revert to initial styles
    fireEvent.mouseLeave(card);
    expect(cardTitleContent).toHaveStyle("paddingLeft: 0rem");
    expect(cardTitleContent).toHaveStyle("color: black");
  });
});
