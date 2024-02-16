// const {  Col, Row, Slider, Space  } =;
import {Col, ConfigProvider, Row, Slider, Space} from "antd";
function InputRange ({rangeValue, setRangeValue}) {

    const onChange = (newValue) => {
        setRangeValue(newValue);
    };

    return (
        <Space
            style={{width: '100%',}}
            direction="vertical">
            <ConfigProvider
                theme={{
                    components: {
                        Slider: {
                            handleColor: '#46A358',
                            handleSize: 13,
                            handleActiveColor: '#46A358',
                            handleLineWidth: 3,
                            trackBg: '#46A358',
                            trackHoverBg: '#46A358',
                            trackBgDisabled: '#46A358',
                            colorPrimaryBorderHover: '#46A358'
                        }
                    }
                }}>
                <Row>
                    <Col span={12}>
                        <Slider
                            min={40}
                            max={1500}
                            onChange={onChange}
                            className='input-range'
                            value={typeof rangeValue === 'number' ? rangeValue : 0}
                        />
                    </Col>
                </Row>
            </ConfigProvider>
        </Space>
    )
}

export default InputRange;