import React from 'react';
import { Input, Button } from 'antd';

interface SearchProp {
  onSearch: (value: string) => void;
  handleClick?: () => void;
}

export const Search = ({ onSearch, handleClick }: SearchProp) => (
  <div
    className="radio-item"
    style={{ display: 'flex', justifyContent: 'space-between' }}
  >
    <div>
      <span>搜索：</span>
      <Input.Search
        placeholder="input search text"
        onSearch={onSearch}
        style={{ width: 300, marginLeft: 14 }}
      />
    </div>
    {handleClick && <Button onClick={handleClick}>添 加</Button>}
  </div>
);
