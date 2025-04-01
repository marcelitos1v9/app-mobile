import { TurmaType } from '@/types/TurmaType';
import styles from './styles';
import { FlatList, ListRenderItem, StyleProp, View, ViewStyle } from 'react-native';
import { TurmaItem } from '../TurmaItem';

type TurmaListProps = {
    turmas: TurmaType[];
    style?: StyleProp<ViewStyle>;
    itemStyle?: ViewStyle;
    contentContainerStyle?: StyleProp<ViewStyle>;
    onTurmaPress?: (turma: TurmaType) => void;
};

export default function TurmaList({
    turmas,
    style,
    itemStyle,
    contentContainerStyle,
    onTurmaPress
}: TurmaListProps) {
    const renderItem: ListRenderItem<TurmaType> = ({ item }) => (
        <TurmaItem
            turma={item}
            style={itemStyle}
            onPress={()=> onTurmaPress?.(item)}
        />
    );
    return (
        <FlatList
            data={turmas}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={[styles.container, style]}
            showsVerticalScrollIndicator={false}
        />
    );
}