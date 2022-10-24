import { ALU } from "@computron5k/simulator/chip/builtins/index.js";
import { Chip } from "@computron5k/simulator/chip/chip.js";
import { render, screen } from "@testing-library/react";
import {
  makeVisualization,
  makeVisualizationsWithId,
} from "./visualizations.js";

describe("visualizations", () => {
  it("returns empty for chips with no parts", () => {
    const chip = new Chip([], [], "test");

    expect(makeVisualization(chip)).toBeUndefined();
    expect(makeVisualizationsWithId({ parts: [chip] })).toEqual([]);
  });

  it("returns vis for builtins", async () => {
    const alu = new ALU();

    const vis = makeVisualizationsWithId({ parts: [alu] });
    expect(vis.length).toBe(1);
    render(
      <>
        {vis.map(([k, v]) => (
          <div key={k}>{v}</div>
        ))}
      </>
    );
    const rendered = await screen.findAllByText(/ALU/);
    expect(rendered).toBeDefined();
  });
});