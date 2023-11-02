// 资源界面：展示收藏的资源

import { Input, Table, TableColumnProps } from '@arco-design/web-react';
import { RefInputType } from '@arco-design/web-react/es/Input/interface';
import { IconSearch } from '@arco-design/web-react/icon';
import { useRef, useState } from 'react';

const CollectedResource = () => {
  const inputRef = useRef<RefInputType>(null);
  const columns: TableColumnProps[] = [
    {
      title: '收藏的资源',
      dataIndex: 'collectedResource',
      filterIcon: <IconSearch />,
      filterDropdown: ({ filterKeys, setFilterKeys, confirm }) => {
        return (
          <div className="arco-table-custom-filter">
            <Input.Search
              ref={inputRef}
              searchButton
              placeholder="Please enter name"
              value={filterKeys ? filterKeys[0] : ''}
              onChange={value => {
                if (setFilterKeys) {
                  setFilterKeys(value ? [value] : []);
                }
              }}
              onSearch={() => {
                if (confirm) {
                  confirm();
                }
              }}
            />
          </div>
        );
      },
      onFilter: (value, row) =>
        value ? row.collectedResource.indexOf(value) !== -1 : true,
      onFilterDropdownVisibleChange: visible => {
        if (visible) {
          setTimeout(() => inputRef.current?.focus(), 150);
        }
      },
    },
    {
      title: '资源描述',
      dataIndex: 'description',
    },
    {
      title: '查看资源',
      dataIndex: 'view',
    },
    {
      title: '时间',
      dataIndex: 'time',
    },
  ];

  const [data] = useState([
    {
      key: 1,
      collectedResource: '购买的资源1',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 2,
      collectedResource: '购买的资源2',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 3,
      collectedResource: '购买的资源3',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 4,
      collectedResource: '购买的资源4',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 5,
      collectedResource: '购买的资源5',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 6,
      collectedResource: '购买的资源6',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
    {
      key: 7,
      collectedResource: '购买的资源7',
      description: '描述',
      view: (
        <a href="about:blank" style={{ textDecoration: 'none' }}>
          点击查看资源
        </a>
      ),
      time: '2023年7月31日',
    },
  ]);
  return (
    <Table
      stripe={true}
      borderCell={true}
      columns={columns}
      data={data}
      pagination={{
        showTotal: true,
        pageSize: 5,
      }}
      style={{
        marginRight: '30px',
        marginLeft: '30px',
        marginTop: '20px',
        marginBottom: '20px',
      }}
    />
  );
};

export default CollectedResource;
