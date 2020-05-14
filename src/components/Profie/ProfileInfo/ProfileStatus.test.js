import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from './ProfileStatus'


describe("ProfileStatus component", () => {
  test("status from props should be in state", () => {
    const component = create(<ProfileStatus status='Popov4ik Molodec' />);
    const instance = component.getInstance();
    expect(instance.state.status).toBe("Popov4ik Molodec");
  });
  test("after creation span should be displayed", () => {
    const component = create(<ProfileStatus status='Popov4ik Molodec' />);
    const root = component.root
    let span = root.findByType('span')
    expect(span).not.toBeNull();
  });
  test("after creation <input> shouldn't be displayed", () => {
    const component = create(<ProfileStatus status='Popov4ik Molodec' />);
    const root = component.root
    expect(() => {
      let input = root.findByType('input')
    }).toThrow();
  });
  test("after creation span should be displayed with correct status", () => {
    const component = create(<ProfileStatus status='Popov4ik Molodec' />);
    const root = component.root
    let span = root.findByType('span')
    expect(span.children[1]).toBe('Popov4ik Molodec');
  });
  test("instead of <span should apear <input>", () => {
    const component = create(<ProfileStatus status='Popov4ik Molodec' />);
    const root = component.root
    let span = root.findByType('span')
    span.props.onDoubleClick()
    let input = root.findByType('input')
    expect(input.props.value).toBe('Popov4ik Molodec');
  });
});