package main

import (
	"context"
	"encoding/json"
	"net/http"
	"os"
	"os/signal"
	"strings"
	"syscall"
	"time"
)

func main() {

	ctx, _ := signal.NotifyContext(context.Background(), os.Interrupt, os.Kill, syscall.SIGTERM, syscall.SIGINT)

	srv := &http.Server{
		Addr:    ":8080",
		Handler: NewRouter(),
	}

	go srv.ListenAndServe()

	<-ctx.Done()

	ctxShutDown, _ := context.WithTimeout(context.Background(), 2*time.Second)
	srv.Shutdown(ctxShutDown)

}

func NewRouter() http.Handler {

	r := http.NewServeMux()

	articlePath := "/api/v1/posts/"

	r.HandleFunc(articlePath, func(w http.ResponseWriter, r *http.Request) {

		id := ""
		if strings.HasPrefix(r.URL.Path, articlePath) {
			id = r.URL.Path[len(articlePath):]
		}

		if id != "" {

			w.Header().Set("Content-Type", "application/json; charset=utf-8")

			for _, post := range posts() {
				if post.ID == id {
					time.Sleep(5 * time.Second)
					w.WriteHeader(http.StatusOK)
					_ = json.NewEncoder(w).Encode(post)
					return
				}
			}

			w.WriteHeader(http.StatusNotFound)
			_ = json.NewEncoder(w).Encode(map[string]string{"error": "not found"})
		}

		w.Header().Set("Content-Type", "application/json; charset=utf-8")
		w.WriteHeader(http.StatusOK)
		_ = json.NewEncoder(w).Encode(posts())
	})

	return r
}

type CustomTime struct {
	time.Time
}

func (ct *CustomTime) UnmarshalJSON(b []byte) error {

	t, err := time.Parse("2006-01-02", string(b[1:len(b)-1]))
	if err != nil {
		return err
	}

	ct.Time = t

	return nil
}

func (ct *CustomTime) MarshalJSON() ([]byte, error) {
	return []byte(ct.Format(`"2006-01-02"`)), nil
}

type Article struct {
	ID        string     `json:"id"`
	Title     string     `json:"title"`
	Content   string     `json:"content"`
	CreatedAt CustomTime `json:"createdAt"`
}

func posts() []Article {

	return []Article{
		{
			ID:        "post-1",
			Title:     "Post 1",
			Content:   "This is the content of the first post. It is about 50 chars.",
			CreatedAt: CustomTime{time.Now()},
		},
		{
			ID:        "post-2",
			Title:     "Post 2",
			Content:   "This is the content of the second post. It's also around 50 chars.",
			CreatedAt: CustomTime{time.Now().Add(-48 * time.Hour)},
		},
		{
			ID:        "post-3",
			Title:     "Post 3",
			Content:   "This is the content of the third post. It's roughly 50 chars.",
			CreatedAt: CustomTime{time.Now().Add(-72 * time.Hour)},
		},
		{
			ID:        "post-4",
			Title:     "Post 4",
			Content:   "This is the content of the fourth post. It's near 50 chars.",
			CreatedAt: CustomTime{time.Now().Add(-96 * time.Hour)},
		},
	}
}
