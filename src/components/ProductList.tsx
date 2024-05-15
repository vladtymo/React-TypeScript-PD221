import React, { useEffect } from 'react';
import { Button, Popconfirm, Space, Table, message } from 'antd';
import type { TableProps } from 'antd';
import { Link } from 'react-router-dom';
import { productsService } from '../services/products.service';
import { ProductModel } from '../models/products.model';
import { DeleteOutlined, EditOutlined, InfoCircleOutlined } from '@ant-design/icons';

const getColumns = (deleteHandler: (id: number) => void): TableProps<ProductModel>['columns'] =>
    [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',
            sorter: {
                compare: (a, b) => a.id - b.id,
                //multiple: 1,
            },
        },
        {
            title: 'Image',
            dataIndex: 'imageUrl',
            key: 'imageUrl',
            render: (url, record) => <img style={imageStyle} height={50} src={url} alt={record.name} />,
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text) => <a href="/">{text}</a>,
            sorter: {
                compare: (a, b) => a.name > b.name ? 1 : -1,
                //multiple: 2,
            },
        },
        {
            title: 'Category',
            dataIndex: 'categoryName',
            key: 'categoryName'
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text) => <span>{text}$</span>,
            sorter: {
                compare: (a, b) => a.price - b.price,
                //multiple: 3,
            },
        },
        {
            title: 'Discount',
            dataIndex: 'discount',
            key: 'discount',
            render: (text) => <span>{text}%</span>,
            sorter: {
                compare: (a, b) => a.discount - b.discount,
                //multiple: 4,
            },
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <Button type='primary' icon={<InfoCircleOutlined />} href='#' />
                    <Link to={`edit/${record.id}`}>
                        <Button icon={<EditOutlined />} />
                    </Link>
                    <Popconfirm
                        title="Delete the product"
                        description={`Are you sure to delete the ${record.name}?`}
                        onConfirm={() => deleteHandler(record.id)}
                        okText="Yes"
                        cancelText="No"
                        placement='left'
                    >
                        <Button danger icon={<DeleteOutlined />} />
                    </Popconfirm>
                </Space>
            ),
        }
    ];

const ProductList: React.FC = () => {

    const [products, setProducts] = React.useState<ProductModel[]>([]);

    useEffect(() => {
        (async function () {
            const response = await productsService.getAll();
            setProducts(response.data);
        })();
    }, []);

    const deleteProduct = async (id: number) => {
        console.log("Deleting product: ", id);

        const response = await productsService.delete(id);
        if (response.status === 200) {

            setProducts(products.filter(x => x.id !== id));
            message.success(`Product deleted successfully!`);
        }
    };

    return (
        <>
            <Button style={createBtn} type="primary">
                <Link to="create">Create New Product</Link>
            </Button>

            <Table columns={getColumns(deleteProduct)} dataSource={products}
                pagination={{ pageSize: 5 }}
                rowKey="id" />
        </>
    );
}

export default ProductList;

const imageStyle: React.CSSProperties = {
    width: 60,
    height: 60,
    objectFit: "cover",
    borderRadius: 6
}
const createBtn: React.CSSProperties = {
    marginBottom: 10
}