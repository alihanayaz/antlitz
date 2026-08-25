import { Table } from "antlitz";
import { RADII } from "./shared";

const VARIANTS = ["outline", "plain"] as const;
const SIZES = ["sm", "md", "lg"] as const;

const ROWS = [
  { quarter: "Q1", revenue: "120,400", change: "+4%" },
  { quarter: "Q2", revenue: "138,900", change: "+15%" },
  { quarter: "Q3", revenue: "131,200", change: "−6%" },
];

export function Basic() {
  return (
    <Table>
      <thead>
        <tr>
          <th>Quarter</th>
          <th>Revenue</th>
          <th>Change</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr key={row.quarter}>
            <td>{row.quarter}</td>
            <td>{row.revenue}</td>
            <td>{row.change}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export function Variants() {
  return VARIANTS.map((variant) => (
    <Table key={variant} variant={variant}>
      <tbody>
        <tr>
          <td>{variant}</td>
        </tr>
      </tbody>
    </Table>
  ));
}

export function Sizes() {
  return SIZES.map((size) => (
    <Table key={size} size={size}>
      <tbody>
        <tr>
          <td>{size}</td>
        </tr>
      </tbody>
    </Table>
  ));
}

export function Radius() {
  return RADII.map((radius) => (
    <Table key={radius} radius={radius}>
      <tbody>
        <tr>
          <td>{radius}</td>
        </tr>
      </tbody>
    </Table>
  ));
}

export function Caption() {
  return (
    <Table>
      <caption>Revenue by quarter, in euros</caption>
      <thead>
        <tr>
          <th>Quarter</th>
          <th className="text-end">Revenue</th>
        </tr>
      </thead>
      <tbody>
        {ROWS.map((row) => (
          <tr key={row.quarter}>
            <td>{row.quarter}</td>
            <td className="text-end tabular-nums">{row.revenue}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
