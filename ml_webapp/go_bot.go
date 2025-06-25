// Simple Go backend for Chatterly (echo bot)
// Run: go run go_bot.go
package main

import (
	"encoding/json"
	"log"
	"net/http"
)

type ChatRequest struct {
	Message string `json:"message"`
}
type ChatResponse struct {
	Reply string `json:"reply"`
}

func chatHandler(w http.ResponseWriter, r *http.Request) {
	var req ChatRequest
	json.NewDecoder(r.Body).Decode(&req)
	resp := ChatResponse{Reply: "[Go bot] You said: " + req.Message}
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(resp)
}

func main() {
	http.HandleFunc("/chat", chatHandler)
	log.Println("Go bot running on :5001")
	http.ListenAndServe(":5001", nil)
}
