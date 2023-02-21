"use client";

import { ReactNode } from "react";
import styled from "styled-components";

type HeaderTitleT = {
  name: string;
};

export interface RowObjT {
  USD: ReactNode;
  ETH: ReactNode;
  BTC: ReactNode;
}

type RowT = {
  [key: string]: ReactNode | RowObjT;
};

type TabePropsType = {
  data: Array<RowT>;
  titles: Array<HeaderTitleT>;
  currency: keyof RowObjT;
};

const Table = ({ titles, data, currency }: TabePropsType) => {
  return (
    <TableS>
      <THeadS>
        <tr>
          {titles.map((cell, index) => {
            return <ThS key={index}>{cell.name}</ThS>;
          })}
        </tr>
      </THeadS>
      <TBodyS>
        {data.map((row, index) => {
          const rowValues = Object.values(row);
          return (
            <tr key={index}>
              {rowValues.map((cell, index) => {
                if (cell != null && typeof cell === "object" && "USD" in cell) {
                  return <TdS key={index}>{cell[currency] || "-"}</TdS>;
                }
                return <TdS key={index}>{cell || "-"}</TdS>;
              })}
            </tr>
          );
        })}
      </TBodyS>
    </TableS>
  );
};

const TableS = styled.table`
  table-layout: fixed;
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
`;

const THeadS = styled.thead`
  position: sticky;
  top: 0;
  tr {
    background-color: ${({ theme }) => theme.colors.white};
    th:first-child {
      width: 20px;
    }
    th:not(:first-child) {
      padding-left: 30px;
    }
  }
`;

const TBodyS = styled.tbody`
  tr {
    transition: background 0.3s;
    background-color: ${({ theme }) => theme.colors.white};
    cursor: pointer;
    &:hover {
      transition: background 0.3s;
      background-color: ${({ theme }) => theme.table.color.hover};
    }
  }
`;

const ThS = styled.th`
  text-align: left;
  padding: 16px;
  color: ${({ theme }) => theme.table.color.main};
  border-bottom: 2px solid ${({ theme }) => theme.table.color.border};
`;

const TdS = styled.td`
  text-align: left;
  padding: 16px;
  color: ${({ theme }) => theme.table.color.main};
  border-bottom: 1px solid ${({ theme }) => theme.table.color.border};
`;

export default Table;
