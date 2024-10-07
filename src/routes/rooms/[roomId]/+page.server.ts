export function load({ params }) {
    if (!params.roomId) {
        throw new Error("Room ID is required.");
    }
    return {
        roomId: params.roomId,
    };
}
