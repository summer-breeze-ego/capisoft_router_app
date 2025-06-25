import { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, AreaChart, ResponsiveContainer, Area } from 'recharts';

const data = [
    {
        name: 'Jan',
        lr: 5000,
        ns: 6000,
        nj: 1000,
    },
    {
        name: 'Feb',
        lr: 4200,
        ns: 5000,
        nj: 800,
    },
    {
        name: 'March',
        lr: 4500,
        ns: 5300,
        nj: 800,
    },
    {
        name: 'Apr',
        lr: 3500,
        ns: 4200,
        nj: 800,
    },
    {
        name: 'May',
        lr: 4000,
        ns: 4500,
        nj: 500,
    },
    {
        name: 'June',
        lr: 4750,
        ns: 5250,
        nj: 500,
    },
    {
        name: 'July',
        lr: 5000,
        ns: 5800,
        nj: 800,
    },
    {
        name: 'Aug',
        lr: 5500,
        ns: 6000,
        nj: 500,
    },
    {
        name: 'Sep',
        lr: 5300,
        ns: 5500,
        nj: 300,
    },
    {
        name: 'Oct',
        lr: 4750,
        ns: 5000,
        nj: 250,
    },
    {
        name: 'Nov',
        lr: 4500,
        ns: 4750,
        nj: 250,
    },
    {
        name: 'Dec',
        lr: 4300,
        ns: 4300,
        nj: 250,
    },
];

export default class AnalyticsBarChart extends PureComponent {

    render() {
        return (
            <ResponsiveContainer width="100%" height="100%">
                <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" orientation="left" stroke="gray" domain={[0, 6000]} tickCount={7} />

                    <Bar yAxisId={'left'} dataKey={'lr'} fill={'#D7F0FC'} />
                    <Bar yAxisId={'left'} dataKey={'ns'} fill={'#CDEFD9'} />
                    <Bar yAxisId={'left'} dataKey={'nj'} fill={'#FEA4A3'} />
                </BarChart>
            </ResponsiveContainer>
        );
    }
}

export class NoticeAreaChart extends PureComponent {
    render() {
        return (
            <ResponsiveContainer width={"100%"} height={"100%"}>
                <AreaChart data={data}>
                    <Area type="monotone" dataKey="lr" stroke="#85BA49" fill="#E4F5D1" fillOpacity={0.3} />
                </AreaChart>
            </ResponsiveContainer>
        )
    }
}