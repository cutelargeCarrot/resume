export const onAddToolList = (
    preList:TSResume.SliderItem[],
    current:TSResume.SliderItem
):TSResume.SliderItem[] => {
    const addKeys = preList.map(item=>item.key)
    let nextList = [...Array.from(preList)]
    if(!addKeys.includes(current.key)){
        nextList = [...nextList,current]
    }
    return nextList
}

export const onDelToolList = (
    preList:TSResume.SliderItem[],
    current:TSResume.SliderItem 
):TSResume.SliderItem[] => {
    return preList.reduce<TSResume.SliderItem[]>((pre,item)=>{
        return item.key == current.key ? [...pre] : [...pre,item]
    },[])    
}