export const dropdownSaleTotalType = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; totalTypeDesc: any }): any => {
            const { id, totalTypeDesc } = obj;
            return { value: id, label: totalTypeDesc };
        })
    );
};
export const dropdownSaleTotalTypeDetails = (data: any) => {
    return (
        data &&
        data?.map((obj: { id: any; detailDesc: any }): any => {
            const { id, detailDesc } = obj;
            return { value: id, label: detailDesc };
        })
    );
};
