import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const RatingView = ({ numberOfVotes }) => {
  const renderStars = () => {
    if (typeof numberOfVotes !== 'number') {
      return null;
    }

    const filledStars = Math.floor(numberOfVotes);
    const halfStar = numberOfVotes - filledStars >= 0.5;

    const stars = [];

    // Renderiza estrelas preenchidas
    for (let i = 0; i < filledStars; i++) {
      stars.push(<Icon key={i} name="star" size={20} style={styles.starIcon} />);
    }

    // Renderiza meia estrela, se aplicável
    if (halfStar) {
      stars.push(<Icon key="half" name="star-half-o" size={20} style={styles.starIcon} />);
    }

    // Renderiza estrelas vazias
    const emptyStars = 5 - filledStars - (halfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<Icon key={`empty_${i}`} name="star-o" size={20} style={styles.starIcon} />);
    }

    return stars;
  };

  return (
    <View style={styles.container}>
      {typeof numberOfVotes === 'number' && (
        <>
          <Text style={styles.ratingText}>{numberOfVotes.toFixed(1)}</Text>
          <View style={styles.starContainer}>{renderStars()}</View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    fontSize: 18,
    marginRight: 5,
  },
  starContainer: {
    flexDirection: 'row',
  },
  starIcon: {
    color: '#FFD700',
  },
});

export default RatingView;