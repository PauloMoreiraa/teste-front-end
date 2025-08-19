import React from "react";
import "./tableNav.scss";

interface TableNavProps {
  options: string[];
  onSelect?: (option: string) => void;
}

const TableNav: React.FC<TableNavProps> = ({ options, onSelect }) => {
  return (
    <div className="tableNav">
      <div className="table">
        {options.map((opt, index) => (
          <div key={index} className="tableNavItem">
            <a
              href="#"
              className="tableNavLink"
              onClick={(e) => {
                e.preventDefault();
                onSelect?.(opt);
              }}
            >
              {opt}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TableNav;
